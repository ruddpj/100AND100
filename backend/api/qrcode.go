package api

import (
	"encoding/base64"
	"fmt"
	"net/http"
)

func QRCodeUpload(client *Client, event *Event) GameError {
	s := store
	base64DecodedQRData, err := base64.StdEncoding.DecodeString(event.LogoData)
	if err != nil {
		return GameError{code: SERVER_ERROR, message: fmt.Sprint(err)}
	}
	storeError := s.saveQRCode(event.Room, base64DecodedQRData)
	if storeError.code != "" {
		return storeError
	}
	return GameError{}
}

func DeleteQRCodeUpload(client *Client, event *Event) GameError {
	s := store
	storeError := s.deleteQRCode(event.Room)
	if storeError.code != "" {
		return storeError
	}
	return GameError{}
}

func FetchQRCode(w http.ResponseWriter, roomCode string) GameError {
	s := store
	qrCodeData, storeError := s.loadQRCode(roomCode)
	if storeError.code != "" {
		w.WriteHeader(404)
		return storeError
	}
	w.WriteHeader(200)
	w.Write(qrCodeData)
	return GameError{}
}

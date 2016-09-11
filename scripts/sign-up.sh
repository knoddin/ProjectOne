curl --include --request POST http://tic-tac-toe.wdibos.com/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "knoddin2@gmail.com",
      "password": "123",
      "password_confirmation": "123"
    }
  }'

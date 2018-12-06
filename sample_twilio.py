from twilio.rest import Client

account_sid = 'AC23077766b89b43b4b33b5dd31e396dab'
auth_token = '4885dc1d2ac83e2abbc00ba725f88ada'
client = Client(account_sid, auth_token)
msg = "The bin placed at "+"MLK LIbrary"+" is about to get completely filled. It needs assitance."
message = client.messages.create(body=msg,from_='+19133183697',to='+16692138942')
print("Message SID :",message.sid)

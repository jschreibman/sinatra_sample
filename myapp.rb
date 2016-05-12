require 'sinatra'
require 'json'

# rendering json for everything (except /)
before do
  content_type 'application/json'
end

# send the frontend
# This is the only actual html served.
# Everything else is json

get '/user' do
  "Some users"
  send_file 'users.json'
end

put '/user' do
  "Some users"
end

post '/user' do
  "Some users"
end

delete '/user/:id' do
  "Deleting User: #{:id}"
end

get '/' do
  content_type 'html'
  send_file 'public/index.html'
end

get '/new' do
  "This is the New User page"
end

get '/edit' do
  "This is the Edit User page"
end

get '/show' do
  "This is the Show User page"
end

get '/delete' do
  "This is the Delete User page"
end
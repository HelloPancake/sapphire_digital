require "httparty"
require 'json'

def get_most_recent
    most_recent_times = []

    response = HTTParty.get('https://gist.githubusercontent.com/gretchenziegler/853c4f709d45176aa44c8e5aee864cac/raw/010a4c44455ffc93b8039935cfc4e0dff41ae502/hcsc.json')

    parsed_response = JSON.parse(response)

    parsed_response["client_environments"].each do |variant|
        most_recent_times << variant["most_recent_deploys"]["platform-api"]["deployed_at"]
    end

    return most_recent_times
end

puts get_most_recent()


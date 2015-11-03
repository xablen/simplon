require 'open-uri'
require 'json'


loop do
    puts "Entre un numero de Code Barre:"
    bar_code = gets.chomp

    url="http://fr.openfoodfacts.org/api/v0/produit/un-code-barre.json/#{bar_code}.json"

    json = open(url).read

    data = JSON.parse(json)

    puts data['status_verbose']
    puts data['status']

end



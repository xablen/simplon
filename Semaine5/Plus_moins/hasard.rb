hasard = rand 100

puts "Saisissez un nombre entre 1 et 100:"
saisie = gets.to_i
i=1

while saisie != hasard

	if ((saisie < 0) || (saisie > 100))
		puts "Ce n'est pas un nombre compris entre 1 et 100 !"
		puts "Saisissez un nombre entre 1 et 100:"
		saisie = gets.to_i
	elsif saisie < hasard
		puts "Le nombre est inférieur au tirage de l'ordinateur !"
		puts "Saisissez un nombre entre 1 et 100:"
		saisie = gets.to_i
	elsif saisie > hasard
		puts "Le nombre est supérieur au tirage de l'ordinateur !"
		puts "Saisissez un nombre entre 1 et 100:"
		saisie = gets.to_i
	end

	i +=1
end

puts "Bravo, vous avez deviné le nombre choisi par l'ordinateur !"
puts "Vous l'avez deviné en #{i} coups !"
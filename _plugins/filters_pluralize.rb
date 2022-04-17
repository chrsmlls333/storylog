# pluralize
#
# A Liquid filter to make it easy to form correct plurals.
#
# https://github.com/bdesham/pluralize

module Pluralize

	def pluralize(number, singular, plural = nil)
		numberf = number.to_f
		numberi = number.to_i
		number = numberf == numberi ? numberi : numberf
		if number == 1.0
			"#{number} #{singular}"
		elsif plural.nil?
			"#{number} #{singular}s"
		else
			"#{number} #{plural}"
		end
	end

end

Liquid::Template.register_filter(Pluralize)
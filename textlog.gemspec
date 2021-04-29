Gem::Specification.new do |spec|
	spec.name          = "storylog"
	spec.version       = "1.0.0"
	spec.authors       = ["Chris Mills"]
	spec.email         = ["info@chriseugenemills.com"]

	spec.summary       = "A minimalist, lefty-style Jekyll theme for documentation based blog"
	spec.homepage      = "https://github.com/chrsmlls333/storylog"
	spec.license       = "MIT"

	spec.metadata["plugin_type"] = "theme"

	spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|(LICENSE|README)((\.(txt|md|markdown)|$)))!i) }

	spec.add_runtime_dependency "jekyll", "~> 4.1"

	spec.add_development_dependency "bundler", "~> 2.1.4"
end


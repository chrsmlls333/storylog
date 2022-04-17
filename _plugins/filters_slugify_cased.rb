module Jekyll
    module SlugifyCasedFilter
        # Slugify a filename or title.
        #
        # input - The filename or title to slugify.
        # mode - how string is slugified
        #
        # Returns the given filename or title as a non-lowercase URL String.
        # For more detail, see:
        #   https://github.com/jekyll/jekyll/blob/master/lib/jekyll/filters.rb#L62
        def slugify_cased(input, mode = nil)
            Utils.slugify(input, :mode => mode, :cased => true)
        end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::SlugifyCasedFilter)

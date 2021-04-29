# CHAPTERS RE-TITLING #############################################

Jekyll::Hooks.register :chapters, :pre_render do |chapter, payload|
  
  # make some local variables for convenience
  # site = chapter.site

  # puts 'Enriching chapters with real titles ' + document.data['title']

  title = [ chapter.data['series'], chapter.data['part'], chapter.data['entry'] ]
  title = title.compact.reject(&:empty?).uniq.join(' · ')

  # inject your value in document's data
  chapter.data['title'] = title

end


# STORIES DATE CALCULATION #####################################

require 'date'
Jekyll::Hooks.register :stories, :pre_render do |story, payload|

  chapters = story.site.collections['chapters'].docs.select do |chapter|
    chapter.data['series'] == story.data["title"]
  end
  next if chapters.empty?

  story.data['num_chapters'] = chapters.length

  dates = chapters.map { |c| c.data['date'] }

  story.data['date_first'], story.data['date_last'] = dates.minmax

  if !story.data.has_key?('date_first') || !story.data.has_key?('date_last')
    puts "Stories Date Calc Hook failed! " + story.data['title']
  end

end


# POSTS/COLLECTIONS FEATURED IMAGE DETECTION ##################
Jekyll::Hooks.register :documents, :pre_render do |doc, payload|

  images = doc.content.scan(/src(?:abs)?=["'](.+\.(?:gif|jpe?g|tiff?|png|webp|bmp))["']/i)
  next if images.empty?
  path = images.first.first

  abs = path =~ /^(?:[a-z]+:)?\/\//i
  path.prepend(doc.site.config['imagepath']) if !abs

  doc.data['image'] = doc.data['image'] || path
  doc.data['tags'] = doc.data['tags'] | ['illustrated']

end

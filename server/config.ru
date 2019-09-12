lib = File.expand_path('../lib', __FILE__)
$:.unshift(lib) unless $:.include?(lib)

require 'sinatra/base'
require 'football_manager'

map('/') { run FootballManager }


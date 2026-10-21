# Spell Checker API - Ruby Gem

Spell Checker flags misspelled words in submitted English text and generates correction suggestions. It counts total spelling errors and lists possible replacements for each mistaken word.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_spellchecker'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_spellchecker
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_spellchecker'

# Initialize the client
client = APIVerve::Spellchecker::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ text: "I neeed to call my friend on telephine today!" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "I neeed to call my friend on telephine today!" })
  puts response["data"]
rescue APIVerve::Spellchecker::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Spellchecker::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Spellchecker::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "spellPass": false,
    "mispellingsFound": 2,
    "corrections": [
      {
        "word": "neeed",
        "suggestions": [
          "needed",
          "need",
          "needy",
          "Neel",
          "needs"
        ]
      },
      {
        "word": "telephine",
        "suggestions": [
          "telephone",
          "telephoned",
          "telephoner",
          "telephones",
          "telephony"
        ]
      }
    ]
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/spellchecker?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/spellchecker?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/spellchecker?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).

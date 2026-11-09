# Spell Checker API - Ruby Gem

Spell Checker flags misspelled words in submitted English text and generates correction suggestions. It counts total spelling errors, lists possible replacements for each mistaken word, and can return the text with the top suggestions applied, plus on paid plans the character offsets of every misspelling.

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
response = client.execute({
  text: "I neeed to call my friend on telephine today!",
  autocorrect: true,
  offsets: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "I neeed to call my friend on telephine today!", autocorrect: true, offsets: true })
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
    "totalOccurrences": 2,
    "corrections": [
      {
        "word": "neeed",
        "suggestions": [
          "needed",
          "need",
          "needy",
          "Neel",
          "needs"
        ],
        "occurrences": 1,
        "offsets": [
          {
            "start": 2,
            "end": 7
          }
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
        ],
        "occurrences": 1,
        "offsets": [
          {
            "start": 29,
            "end": 38
          }
        ]
      }
    ],
    "correctedText": "I needed to call my friend on telephone today!"
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

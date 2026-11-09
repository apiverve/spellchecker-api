# Spell Checker API - PHP Package

Spell Checker flags misspelled words in submitted English text and generates correction suggestions. It counts total spelling errors, lists possible replacements for each mistaken word, and can return the text with the top suggestions applied, plus on paid plans the character offsets of every misspelling.

## Installation

Install via Composer:

```bash
composer require apiverve/spellchecker
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Spellchecker\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'I neeed to call my friend on telephine today!',
    'autocorrect' => true,
    'offsets' => true
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Spellchecker\Client;
use APIVerve\Spellchecker\Exceptions\APIException;
use APIVerve\Spellchecker\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'I neeed to call my friend on telephine today!', 'autocorrect' => true, 'offsets' => true]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/spellchecker?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/spellchecker?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/spellchecker?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).

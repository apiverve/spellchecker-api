using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SpellChecker
{
    /// <summary>
    /// Query options for the Spell Checker API
    /// </summary>
    public class SpellCheckerQueryOptions
    {
        /// <summary>
        /// The text to check the spelling of
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// Include correctedText, the submitted text with each misspelling replaced by its first suggestion
        /// </summary>
        [JsonProperty("autocorrect")]
        public bool? Autocorrect { get; set; }

        /// <summary>
        /// Include the start and end character position of every occurrence of each misspelled word
        /// </summary>
        [JsonProperty("offsets")]
        public bool? Offsets { get; set; }
    }
}

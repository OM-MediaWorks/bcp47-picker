# BCP47 Language picker

A language picker which uses the [BCP47](https://en.wikipedia.org/wiki/IETF_language_tag). It uses the following standards: iso-3166, iso-639, iso-15924 and the un-m49.
With this language picker you are sure you are using the right language codes for each specific language. It is even possible to add your own private use language codes such as the [ROLV](https://hisregistries.org/rolv/).

The widget uses Bootstrap for styles. If you do not likes this you have the ability to override the CSS classes and provide styles yourself.

You must make sure the CSS of Bootstrap is loaded by yourself. 

## Demo

[Demo](https://bcp47.danielbeeke.nl)

## Install

```npm install bcp47-picker```

## Details 

Datasets (it is possible to use totally different ones):
- https://www.mesaonline.org/language-metadata-table
- https://globalrecordings.net/en/rod

Core datasets and specs:
*   [`wooorm/bcp-47`](https://github.com/wooorm/bcp-47-match)
    — parse and stringify BCP 47 language tags
*   [`wooorm/iso-3166`](https://github.com/wooorm/iso-3166)
    — ISO 3166 codes
*   [`wooorm/iso-639-2`](https://github.com/wooorm/iso-639-2)
    — ISO 639-2 codes
*   [`wooorm/iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes
*   [`wooorm/iso-15924`](https://github.com/wooorm/iso-15924)
    — ISO 15924 codes
*   [`wooorm/un-m49`](https://github.com/wooorm/un-m49)
    — UN M49 codes

## Screenshots

<img src="images/searching.png" width="500" />
<hr>
<img src="images/properties.png" width="500" />
<hr>
<img src="images/advanced-properties.png" width="500" />

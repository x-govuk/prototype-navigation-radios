# prototype-navigation-radios

A radio navigation solution for the GOVUK Prototype Kit

## Installation

This is an extension to the GOVUK Prototype Kit, it can be installed using:

```
npm install --save https://github.com/x-govuk/prototype-navigation-radios.git
```

## Usage

After installation you can use a standard set of [radio buttons](https://design-system.service.gov.uk/components/radios/).
Use the name `redirect` and then put a URL into each item's `value`, when the user submits the form it will navigate them to the page 
relating to the item they've chosen.  

### Example (nunjucks)

```
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/button/macro.njk" import govukButton %}
{% extends "layout.html" %}

{% block pageTitle %}
  GOV.UK Prototype Kit
{% endblock %}

{% block content %}

<form>
  {{ govukRadios({
  idPrefix: "where-do-you-live",
  name: "redirect",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "/pages/england",
      text: "England"
    },
    {
      value: "/pages/scotland",
      text: "Scotland"
    },
    {
      value: "/pages/wales",
      text: "Wales"
    },
    {
      value: "/pages/northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}

{{ govukButton({
  text: "Save and continue"
}) }}
</form>
{% endblock %}
```

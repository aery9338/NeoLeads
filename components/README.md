# Project Name

## Introduction

Welcome to the [Project Name] repository. This README outlines our components' structure and best practices. Adhering to these guidelines ensures maintainability and scalability of our codebase.

## Components Structure

Our components are organized to promote reusability and clarity. Below is the structure and description of each directory:

|-- /components
|-- /common
|-- /layout
|-- /ui
|-- /forms
|-- /pages
|-- /hoc
|-- /hooks
|-- /utils

/common: For very generic components like buttons, modals, loaders, etc., which are used across different parts of the application.

/layout: Contains components that make up the layout of your pages like headers, footers, navigation bars, sidebars, etc.

/ui: For all UI-specific components, which are more complex than those in /common. These might include card layouts, custom lists, profile pictures, etc.

/forms: Holds components related to forms like custom input fields, validation messages, form layouts, etc.

/pages: Components that are tied to specific routes/pages. These are often the components that combine various elements from other directories to create a complete page.

/hoc: Higher-Order Components for enhancing your components, like withErrorHandler, withLoader, etc.

/hooks: Custom hooks that can be used across your components.

/utils: Utility components, which could be higher-order functions or components that don’t fall into the other categories.

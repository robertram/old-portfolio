# Naming conventions

## Folder structure

```
src/
    assets/
    component/                          - for components like genre, phone, etc
    i18n/                               - one .js file for each supported
        en.js
        es.js
    lib/                                - for shared functionality
        helper/
        plugin/
    model/                              - data models
    module/
        login/
            assets/
            component/                  - components inside the module
                password_component.tsx
                security_component.tsx
            i18n/
            lib/
            model/
            module/
            service/
            store/
            login-page_component.vue    - main module component
        signup/
            ...
        portal/
            ...
    service/                            - application services
        auth_service.js
        proxy_service.js
    store/
    styles/                             - global styles, follows ITCSS
    app_component.tsx
```

### Domain Driven Design

- The folder structure is based on DDD so each folder inside the "module" folder represents independent domain.
- Notice that this folder structure is recursive, each module inside the module folder should have the same structure.

### When to create a helper vs service?

- If the code has business logic you must **create a service.**
- If the code is mainly to interact with some funcionality in the application **create a service.**
- If the code is going to be reused across several files and doesn't have business logic **create a helper.**

## File naming convention

As may notice in the previous section, all files have a "\_WORD" suffix, this is like the type of the file:

- `_component`
- `_service`
- etc

This is a very helpful practice, please check this [link](https://angular.io/guide/styleguide#symbols-and-file-names)

...

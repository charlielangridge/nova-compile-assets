# nova-compile-assets
A simple Laravel Nova tool to run Yarn from within Nova.

## Install
```bash
composer require charlielangridge/nova-compile-assets
```

```bash
use CharlieLangridge\CompileAssets\CompileAssets;

public function tools()
{
    return [
        new CompileAssets,
    ];
}

```

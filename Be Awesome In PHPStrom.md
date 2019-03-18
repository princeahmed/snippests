# Be Awesome In PHPStorm
-------
## Shortcut
1. ```Alt+1``` Sidebar toggle
1. ```Shift*2``` Search Anything (All, Files, Symbol, Action)
1. ```Ctrl+Shift+N``` Search Files
1. ```Ctrl+E``` Naviget to Recent Files
1. ```Ctrl+Alt+Shift+T``` Refactor code (Renaming...)
1. ```Ctrl+Alt+V``` Extract Variable
    ```$xslt
    if($show){
    echo "Hello Prince" (N:B Put cursor in your target)
    }
    -----------TO------------>
    if($show){
    $name = 'Prince';
    echo "Hello {$name}"
    }
    ```
1. ```Ctrl+Alt+N``` Extract Variable to Inline
    ```$xslt
    if( $show ){
    $name = 'Prince';
    echo "Hello {$name}" (N:B Put cursor in your target)
    }
    ------------TO----------->
    if( $show ){
    echo "Hello Prince" 
    }
    ```
1. ```Alt+G``` Multiple Cursor to next Matching
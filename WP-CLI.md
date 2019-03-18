# Install WP-CLI on Windows
Date:3/19/2019

By: <a href="https://www.github.com/princeahmed">Prince Ahmed</a>

Steps:
---
1. Download The *wp-cli.phar* file on ``C:\wp-cli``
    
    ```curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar```
2. Test if it  works ``php wp-cli.phar --info``
3. Create a new *wp.bat* on ``C:\wp-cli``
4. Put the following codes in *wp.bat*
    ```
    @ECHO OFF
    php "%~dp0wp-cli.phar" %*
    ```
5. Now, Navigate to **System's Properties``->``Advaned System's Properties``->``Advanced``->``Environment Variables``->``System Variables**

    Now, Add a new **path** of ``C:\wp-cli``
1. That's all. Now open your ``command promt`` and enjoy WP-CLI :) 


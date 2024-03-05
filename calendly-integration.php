<?php
/*
    Plugin Name: Calendly Integration
    Description: This plugin help to integrate calendly to theme
    Version: 1.0.0
    Author: Aleksandr Zanko 
    Author URI: https://enway.com/
    License: GPL2
   */

add_action('wp_enqueue_scripts', 'calendly_integration');

function calendly_integration()
{
    wp_enqueue_style( 'style-calendly', 'https://assets.calendly.com/assets/external/widget.css' );


    wp_enqueue_script(
        'calendly-integration-assets', 
        'https://assets.calendly.com/assets/external/widget.js',
        [],
        null,
        [
            'in_footer' => true,
            'strategy'  => 'async',
        ]
    );

    wp_enqueue_script(
        'calendly-integration', 
        plugins_url('js/main.js', __FILE__),
        ['calendly-integration-assets'],
        null,
        [
            'in_footer' => true,
            'strategy'  => 'async',
        ]
    );

}
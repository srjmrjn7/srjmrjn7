import{r as l,j as t}from"./index-CVcNbIs1.js";import{J as f}from"./jszip.min-CA2Vmrg6.js";import{F as b}from"./FileSaver.min-CL8nKYbZ.js";import{z as $}from"./index-2roNfZMn.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const Y=()=>{const[e,a]=l.useState({themeName:"My Theme",author:"Your Name",description:"A custom WordPress theme",includeWooCommerce:!1,includeSass:!1}),[p,c]=l.useState(!1),s=o=>{const{name:i,value:r}=o.target;a(n=>({...n,[i]:r}))},m=o=>{const{name:i,checked:r}=o.target;a(n=>({...n,[i]:r}))},_=o=>o.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,""),h=async()=>{c(!0);try{const o=_(e.themeName),i={...e,themeName:o.replace(/_/g," "),displayThemeName:e.themeName,textDomain:o,version:"1.0.0",license:"GPL-2.0-or-later"},r=y(i),n=new f;Object.entries(r).forEach(([g,u])=>{n.file(g,u)});const d=await n.generateAsync({type:"blob"});b.saveAs(d,`${i.themeName}.zip`)}catch(o){$.error(`Error generating theme: ${o}`,{position:"top-right"})}finally{c(!1)}};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"container",children:[t.jsx("h1",{className:"content-title",children:"WordPress Theme Generator"}),t.jsx("div",{className:"wp-theme-generator-container",children:t.jsxs("div",{className:"generator-form",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Theme Name"}),t.jsx("input",{type:"text",name:"themeName",value:e.themeName,onChange:s,placeholder:"My Awesome Theme",required:!0}),t.jsx("p",{className:"description",children:"Spaces will be converted to underscores"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Author"}),t.jsx("input",{type:"text",name:"author",value:e.author,onChange:s,placeholder:"Your Name",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Description"}),t.jsx("input",{type:"text",name:"description",value:e.description,onChange:s,placeholder:"A custom WordPress theme"})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",name:"includeWooCommerce",checked:e.includeWooCommerce,onChange:m})," Include WooCommerce Support"]}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",name:"includeSass",checked:e.includeSass,onChange:m})," Include Sass Structure"]})]}),t.jsx("button",{className:"generate-button",onClick:h,disabled:p,children:p?"Generating Theme...":"Generate Theme"})]})})]})})};function y(e){return{[`${e.themeName}/style.css`]:x(e),[`${e.themeName}/functions.php`]:w(e),[`${e.themeName}/index.php`]:z(e),[`${e.themeName}/readme.txt`]:G(e),[`${e.themeName}/header.php`]:v(e),[`${e.themeName}/footer.php`]:k(e),[`${e.themeName}/sidebar.php`]:D(e),[`${e.themeName}/template-parts/content.php`]:A(e),[`${e.themeName}/template-parts/content-none.php`]:j(e),[`${e.themeName}/template-parts/content-page.php`]:W(e),[`${e.themeName}/single.php`]:N(e),[`${e.themeName}/page.php`]:C(e),[`${e.themeName}/archive.php`]:T(e),[`${e.themeName}/search.php`]:S(e),[`${e.themeName}/404.php`]:P(e),[`${e.themeName}/assets/css/main.css`]:M(),[`${e.themeName}/assets/js/main.js`]:F(),[`${e.themeName}/assets/images/.gitkeep`]:"",[`${e.themeName}/inc/custom-header.php`]:I(e),[`${e.themeName}/inc/template-tags.php`]:q(e),[`${e.themeName}/inc/template-functions.php`]:E(e),[`${e.themeName}/inc/customizer.php`]:L(e),...e.includeSass?R(e):{},...e.includeWooCommerce?O(e):{}}}function x(e){return`/*
Theme Name: ${e.displayThemeName}
Author: ${e.author}
Description: ${e.description}
Version: 1.0.0
Tested up to: 6.4
Requires PHP: 7.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: ${e.textDomain.replace(/_/g,"-")}
Tags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready
*/`}function w(e){return`<?php
/**
 * ${e.displayThemeName} functions and definitions
 *
 * @package ${e.textDomain}
 */

if (!defined('_S_VERSION')) {
  define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function ${e.textDomain}_setup() {
  load_theme_textdomain('${e.textDomain.replace(/_/g,"-")}', get_template_directory() . '/languages');
  add_theme_support('automatic-feed-links');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  
  register_nav_menus(array(
    'menu-1' => esc_html__('Primary', '${e.textDomain.replace(/_/g,"-")}'),
  ));
  
  add_theme_support('html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
    'style',
    'script',
  ));
  
  add_theme_support('custom-background', apply_filters('${e.textDomain}_custom_background_args', array(
    'default-color' => 'ffffff',
    'default-image' => '',
  )));
  
  add_theme_support('customize-selective-refresh-widgets');
  add_theme_support('custom-logo', array(
    'height'      => 250,
    'width'       => 250,
    'flex-width'  => true,
    'flex-height' => true,
  ));
}
add_action('after_setup_theme', '${e.textDomain}_setup');

/**
 * Set the content width in pixels.
 */
function ${e.textDomain}_content_width() {
  $GLOBALS['content_width'] = apply_filters('${e.textDomain}_content_width', 640);
}
add_action('after_setup_theme', '${e.textDomain}_content_width', 0);

/**
 * Register widget area.
 */
function ${e.textDomain}_widgets_init() {
  register_sidebar(array(
    'name'          => esc_html__('Sidebar', '${e.textDomain.replace(/_/g,"-")}'),
    'id'            => 'sidebar-1',
    'description'   => esc_html__('Add widgets here.', '${e.textDomain.replace(/_/g,"-")}'),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ));
}
add_action('widgets_init', '${e.textDomain}_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function ${e.textDomain}_scripts() {
  wp_enqueue_style('${e.textDomain.replace(/_/g,"-")}-style', get_stylesheet_uri(), array(), _S_VERSION);
  wp_style_add_data('${e.textDomain.replace(/_/g,"-")}-style', 'rtl', 'replace');

  wp_enqueue_script('${e.textDomain.replace(/_/g,"-")}-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true);

  if (is_singular() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }
}
add_action('wp_enqueue_scripts', '${e.textDomain}_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

${e.includeWooCommerce?`
/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
  require get_template_directory() . '/inc/woocommerce.php';
}`:""}
`}function v(e){return`<?php
/**
 * The header for our theme
 *
 * @package ${e.textDomain}
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
  <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', '${e.textDomain.replace(/_/g,"-")}'); ?></a>

  <header id="masthead" class="site-header">
    <div class="site-branding">
      <?php the_custom_logo(); ?>
      <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
      <?php $description = get_bloginfo('description', 'display');
      if ($description || is_customize_preview()) : ?>
        <p class="site-description"><?php echo $description; ?></p>
      <?php endif; ?>
    </div>

    <nav id="site-navigation" class="main-navigation">
      <?php wp_nav_menu(array('theme_location' => 'menu-1', 'menu_id' => 'primary-menu')); ?>
    </nav>
  </header>
`}function k(e){return`<?php
/**
 * The footer for our theme
 *
 * @package ${e.textDomain}
 */
?>
  </div><!-- #content -->

  <footer id="colophon" class="site-footer">
    <div class="site-info">
      <a href="<?php echo esc_url(__('https://wordpress.org/', '${e.textDomain.replace(/_/g,"-")}')); ?>">
        <?php printf(esc_html__('Proudly powered by %s', '${e.textDomain.replace(/_/g,"-")}'), 'WordPress'); ?>
      </a>
      <span class="sep"> | </span>
      <?php printf(esc_html__('Theme: %1$s by %2$s.', '${e.textDomain.replace(/_/g,"-")}'), '${e.displayThemeName}', '${e.author}'); ?>
    </div>
  </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
`}function D(e){return`<?php
/**
 * The sidebar template
 *
 * @package ${e.textDomain}
 */
if (!is_active_sidebar('sidebar-1')) {
  return;
}
?>

<aside id="secondary" class="widget-area">
  <?php dynamic_sidebar('sidebar-1'); ?>
</aside>
`}function z(e){return`<?php
/**
 * The main template file
 *
 * @package ${e.textDomain}
 */
get_header();
?>

<main id="primary" class="site-main">
  <?php if (have_posts()) :
    while (have_posts()) : the_post();
      get_template_part('template-parts/content', get_post_type());
    endwhile;
    the_posts_navigation();
  else :
    get_template_part('template-parts/content', 'none');
  endif; ?>
</main>

<?php get_sidebar(); get_footer(); ?>
`}function N(e){return`<?php
/**
 * The single post template
 *
 * @package ${e.textDomain}
 */
get_header();
?>

<main id="primary" class="site-main">
  <?php while (have_posts()) : the_post();
    get_template_part('template-parts/content', get_post_type());
    the_post_navigation();
    if (comments_open() || get_comments_number()) :
      comments_template();
    endif;
  endwhile; ?>
</main>

<?php get_sidebar(); get_footer(); ?>
`}function C(e){return`<?php
/**
 * The page template
 *
 * @package ${e.textDomain}
 */
get_header();
?>

<main id="primary" class="site-main">
  <?php while (have_posts()) : the_post();
    get_template_part('template-parts/content', 'page');
    if (comments_open() || get_comments_number()) :
      comments_template();
    endif;
  endwhile; ?>
</main>

<?php get_footer(); ?>
`}function T(e){return`<?php
/**
 * The archive template
 *
 * @package ${e.textDomain}
 */
get_header();
?>

<main id="primary" class="site-main">
  <?php if (have_posts()) : ?>
    <header class="page-header">
      <?php the_archive_title('<h1 class="page-title">', '</h1>'); ?>
      <?php the_archive_description('<div class="archive-description">', '</div>'); ?>
    </header>
    <?php while (have_posts()) : the_post();
      get_template_part('template-parts/content', get_post_type());
    endwhile;
    the_posts_navigation();
  else :
    get_template_part('template-parts/content', 'none');
  endif; ?>
</main>

<?php get_sidebar(); get_footer(); ?>
`}function S(e){return`<?php
/**
 * The search results template
 *
 * @package ${e.textDomain}
 */
get_header();
?>

<main id="primary" class="site-main">
  <?php if (have_posts()) : ?>
    <header class="page-header">
      <h1 class="page-title">
        <?php printf(esc_html__('Search Results for: %s', '${e.textDomain.replace(/_/g,"-")}'), '<span>' . get_search_query() . '</span>'); ?>
      </h1>
    </header>
    <?php while (have_posts()) : the_post();
      get_template_part('template-parts/content', 'search');
    endwhile;
    the_posts_navigation();
  else :
    get_template_part('template-parts/content', 'none');
  endif; ?>
</main>

<?php get_sidebar(); get_footer(); ?>
`}function P(e){return`<?php
/**
 * The 404 template
 *
 * @package ${e.textDomain}
 */
get_header();
?>

<main id="primary" class="site-main">
  <section class="error-404 not-found">
    <header class="page-header">
      <h1 class="page-title"><?php esc_html_e('Oops! That page can&rsquo;t be found.', '${e.textDomain.replace(/_/g,"-")}'); ?></h1>
    </header>
    <div class="page-content">
      <p><?php esc_html_e('It looks like nothing was found at this location.', '${e.textDomain.replace(/_/g,"-")}'); ?></p>
      <?php get_search_form(); ?>
    </div>
  </section>
</main>

<?php get_sidebar(); get_footer(); ?>
`}function A(e){return`<?php
/**
 * The default content template
 *
 * @package ${e.textDomain}
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <?php the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>'); ?>
    <?php if ('post' === get_post_type()) : ?>
      <div class="entry-meta">
        <?php ${e.textDomain}_posted_on(); ?>
        <?php ${e.textDomain}_posted_by(); ?>
      </div>
    <?php endif; ?>
  </header>

  <?php ${e.textDomain}_post_thumbnail(); ?>

  <div class="entry-content">
    <?php the_content(sprintf(
      wp_kses(
        __('Continue reading<span class="screen-reader-text"> "%s"</span>', '${e.textDomain.replace(/_/g,"-")}'),
        array('span' => array('class' => array()))
      ),
      get_the_title()
    ));
    wp_link_pages(array(
      'before' => '<div class="page-links">' . esc_html__('Pages:', '${e.textDomain.replace(/_/g,"-")}'),
      'after'  => '</div>',
    )); ?>
  </div>

  <footer class="entry-footer">
    <?php ${e.textDomain}_entry_footer(); ?>
  </footer>
</article>
`}function j(e){return`<?php
/**
 * The content template for no results
 *
 * @package ${e.textDomain}
 */
?>
<section class="no-results not-found">
  <header class="page-header">
    <h1 class="page-title"><?php esc_html_e('Nothing Found', '${e.textDomain.replace(/_/g,"-")}'); ?></h1>
  </header>
  <div class="page-content">
    <?php if (is_search()) : ?>
      <p><?php esc_html_e('Sorry, but nothing matched your search terms.', '${e.textDomain.replace(/_/g,"-")}'); ?></p>
      <?php get_search_form(); ?>
    <?php else : ?>
      <p><?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for.', '${e.textDomain.replace(/_/g,"-")}'); ?></p>
      <?php get_search_form(); ?>
    <?php endif; ?>
  </div>
</section>
`}function W(e){return`<?php
/**
 * The page content template
 *
 * @package ${e.textDomain}
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <?php if (!is_front_page()) : ?>
    <header class="entry-header">
      <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
    </header>
  <?php endif; ?>

  <?php ${e.textDomain}_post_thumbnail(); ?>

  <div class="entry-content">
    <?php the_content();
    wp_link_pages(array(
      'before' => '<div class="page-links">' . esc_html__('Pages:', '${e.textDomain.replace(/_/g,"-")}'),
      'after'  => '</div>',
    )); ?>
  </div>

  <?php if (get_edit_post_link()) : ?>
    <footer class="entry-footer">
      <?php edit_post_link(
        sprintf(
          wp_kses(
            __('Edit <span class="screen-reader-text">%s</span>', '${e.textDomain.replace(/_/g,"-")}'),
            array('span' => array('class' => array()))
          ),
          get_the_title()
        ),
        '<span class="edit-link">',
        '</span>'
      ); ?>
    </footer>
  <?php endif; ?>
</article>
`}function I(e){return`<?php
/**
 * Custom header implementation
 *
 * @package ${e.textDomain}
 */
function ${e.textDomain}_custom_header_setup() {
  add_theme_support('custom-header', apply_filters('${e.textDomain}_custom_header_args', array(
    'default-image'      => '',
    'default-text-color' => '000000',
    'width'              => 1000,
    'height'             => 250,
    'flex-height'        => true,
    'wp-head-callback'   => '${e.textDomain}_header_style',
  )));
}
add_action('after_setup_theme', '${e.textDomain}_custom_header_setup');

function ${e.textDomain}_header_style() {
  $header_text_color = get_header_textcolor();
  if (get_theme_support('custom-header', 'default-text-color') === $header_text_color) {
    return;
  }
  ?>
  <style type="text/css">
  <?php if (!display_header_text()) : ?>
    .site-title,
    .site-description {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
    }
  <?php else : ?>
    .site-title a,
    .site-description {
      color: #<?php echo esc_attr($header_text_color); ?>;
    }
  <?php endif; ?>
  </style>
  <?php
}
`}function q(e){return`<?php
/**
 * Custom template tags for this theme
 *
 * @package ${e.textDomain}
 */

if (!function_exists('${e.textDomain}_posted_on')) :
  /**
   * Prints HTML with meta information for the current post-date/time.
   */
  function ${e.textDomain}_posted_on() {
    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    if (get_the_time('U') !== get_the_modified_time('U')) {
      $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
    }

    $time_string = sprintf($time_string,
      esc_attr(get_the_date(DATE_W3C)),
      esc_html(get_the_date()),
      esc_attr(get_the_modified_date(DATE_W3C)),
      esc_html(get_the_modified_date())
    );

    $posted_on = sprintf(
      esc_html_x('Posted on %s', 'post date', '${e.textDomain.replace(/_/g,"-")}'),
      '<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_string . '</a>'
    );

    echo '<span class="posted-on">' . $posted_on . '</span>';
  }
endif;

if (!function_exists('${e.textDomain}_posted_by')) :
  /**
   * Prints HTML with meta information for the current author.
   */
  function ${e.textDomain}_posted_by() {
    $byline = sprintf(
      esc_html_x('by %s', 'post author', '${e.textDomain.replace(/_/g,"-")}'),
      '<span class="author vcard"><a class="url fn n" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'
    );

    echo '<span class="byline"> ' . $byline . '</span>';
  }
endif;

if (!function_exists('${e.textDomain}_entry_footer')) :
  /**
   * Prints HTML with meta information for the categories, tags and comments.
   */
  function ${e.textDomain}_entry_footer() {
    // Hide category and tag text for pages.
    if ('post' === get_post_type()) {
      /* translators: used between list items, there is a space after the comma */
      $categories_list = get_the_category_list(esc_html__(', ', '${e.textDomain.replace(/_/g,"-")}'));
      if ($categories_list) {
        printf('<span class="cat-links">' . esc_html__('Posted in %1$s', '${e.textDomain.replace(/_/g,"-")}') . '</span>', $categories_list);
      }

      /* translators: used between list items, there is a space after the comma */
      $tags_list = get_the_tag_list('', esc_html_x(', ', 'list item separator', '${e.textDomain.replace(/_/g,"-")}'));
      if ($tags_list) {
        printf('<span class="tags-links">' . esc_html__('Tagged %1$s', '${e.textDomain.replace(/_/g,"-")}') . '</span>', $tags_list);
      }
    }

    if (!is_single() && !post_password_required() && (comments_open() || get_comments_number())) {
      echo '<span class="comments-link">';
      comments_popup_link(
        sprintf(
          wp_kses(
            __('Leave a Comment<span class="screen-reader-text"> on %s</span>', '${e.textDomain.replace(/_/g,"-")}'),
            array('span' => array('class' => array()))
          ),
          get_the_title()
        )
      );
      echo '</span>';
    }

    edit_post_link(
      sprintf(
        wp_kses(
          __('Edit <span class="screen-reader-text">%s</span>', '${e.textDomain.replace(/_/g,"-")}'),
          array('span' => array('class' => array()))
        ),
        get_the_title()
      ),
      '<span class="edit-link">',
      '</span>'
    );
  }
endif;

if (!function_exists('${e.textDomain}_post_thumbnail')) :
  /**
   * Displays an optional post thumbnail.
   */
  function ${e.textDomain}_post_thumbnail() {
    if (post_password_required() || is_attachment() || !has_post_thumbnail()) {
      return;
    }

    if (is_singular()) : ?>
      <div class="post-thumbnail">
        <?php the_post_thumbnail(); ?>
      </div>
    <?php else : ?>
      <a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
        <?php
          the_post_thumbnail('post-thumbnail', array(
            'alt' => the_title_attribute(array('echo' => false)),
          ));
        ?>
      </a>
    <?php endif;
  }
endif;
`}function E(e){return`<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package ${e.textDomain}
 */

/**
 * Adds custom classes to the array of body classes.
 */
function ${e.textDomain}_body_classes($classes) {
  // Adds a class of hfeed to non-singular pages.
  if (!is_singular()) {
    $classes[] = 'hfeed';
  }

  // Adds a class of no-sidebar when there is no sidebar present.
  if (!is_active_sidebar('sidebar-1')) {
    $classes[] = 'no-sidebar';
  }

  return $classes;
}
add_filter('body_class', '${e.textDomain}_body_classes');

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function ${e.textDomain}_pingback_header() {
  if (is_singular() && pings_open()) {
    printf('<link rel="pingback" href="%s">', esc_url(get_bloginfo('pingback_url')));
  }
}
add_action('wp_head', '${e.textDomain}_pingback_header');
`}function L(e){return`<?php
/**
 * Customizer additions
 *
 * @package ${e.textDomain}
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 */
function ${e.textDomain}_customize_register($wp_customize) {
  $wp_customize->get_setting('blogname')->transport = 'postMessage';
  $wp_customize->get_setting('blogdescription')->transport = 'postMessage';
  $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

  if (isset($wp_customize->selective_refresh)) {
    $wp_customize->selective_refresh->add_partial('blogname', array(
      'selector'        => '.site-title a',
      'render_callback' => '${e.textDomain}_customize_partial_blogname',
    ));
    $wp_customize->selective_refresh->add_partial('blogdescription', array(
      'selector'        => '.site-description',
      'render_callback' => '${e.textDomain}_customize_partial_blogdescription',
    ));
  }
}
add_action('customize_register', '${e.textDomain}_customize_register');

/**
 * Render the site title for the selective refresh partial.
 */
function ${e.textDomain}_customize_partial_blogname() {
  bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 */
function ${e.textDomain}_customize_partial_blogdescription() {
  bloginfo('description');
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function ${e.textDomain}_customize_preview_js() {
  wp_enqueue_script('${e.textDomain.replace(/_/g,"-")}-customizer', get_template_directory_uri() . '/js/customizer.js', array('customize-preview'), _S_VERSION, true);
}
add_action('customize_preview_init', '${e.textDomain}_customize_preview_js');
`}function M(e){return`/* Main theme styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

a {
  color: #0073aa;
  text-decoration: none;
}

a:hover {
  color: #00a0d2;
}

.site-header,
.site-footer {
  padding: 1em;
  background: #f5f5f5;
}

.site-main {
  padding: 2em 1em;
}

.entry-header,
.entry-footer {
  margin: 1em 0;
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}`}function F(e){return`/* Main theme JavaScript */
document.addEventListener('DOMContentLoaded', function() {
  // Navigation toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-navigation');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('toggled');
    });
  }
  
  // Skip link focus fix
  const isIe = /(trident|msie)/i.test(navigator.userAgent);
  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function() {
      const id = location.hash.substring(1);
      if (!(/^[A-z0-9_-]+$/.test(id))) return;
      const element = document.getElementById(id);
      if (element) element.focus();
    }, false);
  }
});`}function R(e){return{[`${e.themeName}/sass/style.scss`]:`/*!
Theme Name: ${e.displayThemeName}
Theme URI: 
Author: ${e.author}
Description: ${e.description}
Version: 1.0.0
Text Domain: ${e.textDomain.replace(/_/g,"-")}
*/

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Variables
# Normalize
# Mixins
# Typography
# Elements
# Forms
# Navigation
    ## Links
    ## Menus
# Accessibility
# Alignments
# Clearings
# Layout
# Widgets
# Content
    ## Posts and pages
    ## Comments
# Media
--------------------------------------------------------------*/

// Import variables and mixins first
@import "variables-site/variables-site";
@import "mixins/mixins-master";

/*--------------------------------------------------------------
# Normalize
--------------------------------------------------------------*/
@import "normalize";

/*--------------------------------------------------------------
# Typography
--------------------------------------------------------------*/
@import "typography/typography";

/*--------------------------------------------------------------
# Elements
--------------------------------------------------------------*/
@import "elements/elements";

/*--------------------------------------------------------------
# Forms
--------------------------------------------------------------*/
@import "forms/forms";

/*--------------------------------------------------------------
# Navigation
--------------------------------------------------------------*/
@import "navigation/navigation";

/*--------------------------------------------------------------
# Accessibility
--------------------------------------------------------------*/
@import "modules/accessibility";

/*--------------------------------------------------------------
# Alignments
--------------------------------------------------------------*/
@import "modules/alignments";

/*--------------------------------------------------------------
# Clearings
--------------------------------------------------------------*/
@import "modules/clearings";

/*--------------------------------------------------------------
# Layout
--------------------------------------------------------------*/
@import "layout/layout";

/*--------------------------------------------------------------
# Widgets
--------------------------------------------------------------*/
@import "site/secondary/widgets";

/*--------------------------------------------------------------
# Content
--------------------------------------------------------------*/
@import "site/site";

/*--------------------------------------------------------------
# Media
--------------------------------------------------------------*/
@import "media/media";
`,[`${e.themeName}/sass/variables-site/_variables-site.scss`]:`/*--------------------------------------------------------------
# Variables
--------------------------------------------------------------*/

// Colors
$color__background-body: #fff;
$color__background-screen: #f1f1f1;
$color__background-hr: #ccc;
$color__background-button: #e6e6e6;
$color__background-pre: #eee;
$color__background-ins: #fff9c0;

$color__text-screen: #21759b;
$color__text-input: #666;
$color__text-input-focus: #111;
$color__link: #4169e1;
$color__link-visited: #800080;
$color__link-hover: #191970;
$color__text-main: #404040;

$color__border-button: #ccc #ccc #bbb;
$color__border-button-hover: #ccc #bbb #aaa;
$color__border-button-focus: #aaa #bbb #bbb;
$color__border-input: #ccc;
$color__border-abbr: #666;

// Typography
$font__main: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
$font__code: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
$font__pre: "Courier 10 Pitch", Courier, monospace;
$font__line-height-body: 1.5;
$font__line-height-pre: 1.6;

// Structure
$size__spacing-unit: 1rem;
$size__site-main: 100%;
$size__site-sidebar: 25%;

// Breakpoints
$breakpoint-small: 600px;
$breakpoint-medium: 768px;
$breakpoint-large: 1024px;
`,[`${e.themeName}/sass/mixins/_mixins-master.scss`]:`/*--------------------------------------------------------------
# Mixins
--------------------------------------------------------------*/

@mixin clearfix {
    &::after {
        content: "";
        display: table;
        clear: both;
    }
}

@mixin screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    word-wrap: normal !important;
}

@mixin media($breakpoint) {
    @if $breakpoint == small {
        @media (min-width: $breakpoint-small) { @content; }
    }
    @else if $breakpoint == medium {
        @media (min-width: $breakpoint-medium) { @content; }
    }
    @else if $breakpoint == large {
        @media (min-width: $breakpoint-large) { @content; }
    }
}
`,[`${e.themeName}/sass/_normalize.scss`]:`/*--------------------------------------------------------------
# Normalize
--------------------------------------------------------------*/
html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    font-family: $font__main;
    line-height: $font__line-height-body;
    color: $color__text-main;
    background-color: $color__background-body;
}

a {
    color: $color__link;
    text-decoration: none;

    &:hover,
    &:focus {
        color: $color__link-hover;
    }
}

img {
    height: auto;
    max-width: 100%;
}
`,[`${e.themeName}/sass/typography/_typography.scss`]:`/*--------------------------------------------------------------
# Typography
--------------------------------------------------------------*/
body,
button,
input,
select,
optgroup,
textarea {
    font-family: $font__main;
    font-size: 1rem;
    line-height: $font__line-height-body;
}

h1, h2, h3, h4, h5, h6 {
    clear: both;
    margin: 0 0 $size__spacing-unit;
    line-height: 1.3;
}

p {
    margin: 0 0 $size__spacing-unit;
}

dfn, cite, em, i {
    font-style: italic;
}

blockquote {
    margin: 0 $size__spacing-unit;
}

address {
    margin: 0 0 $size__spacing-unit;
}

pre {
    font-family: $font__pre;
    font-size: 0.9375rem;
    line-height: $font__line-height-pre;
    margin: 0 0 $size__spacing-unit;
    max-width: 100%;
    overflow: auto;
    padding: $size__spacing-unit;
    background: $color__background-pre;
}

code, kbd, tt, var {
    font-family: $font__code;
    font-size: 0.9375rem;
}

abbr, acronym {
    border-bottom: 1px dotted $color__border-abbr;
    cursor: help;
}

mark, ins {
    background: $color__background-ins;
    text-decoration: none;
}

big {
    font-size: 125%;
}
`,[`${e.themeName}/sass/elements/_elements.scss`]:`/*--------------------------------------------------------------
# Elements
--------------------------------------------------------------*/
hr {
    background-color: $color__background-hr;
    border: 0;
    height: 1px;
    margin: $size__spacing-unit 0;
}

ul, ol {
    margin: 0 0 $size__spacing-unit 1.5rem;
    padding: 0;
}

ul {
    list-style: disc;
}

ol {
    list-style: decimal;
}

li > ul,
li > ol {
    margin-bottom: 0;
}

dt {
    font-weight: bold;
}

dd {
    margin: 0 $size__spacing-unit $size__spacing-unit;
}

table {
    margin: 0 0 $size__spacing-unit;
    width: 100%;
    border-collapse: collapse;
}

th {
    font-weight: bold;
    text-align: left;
    padding: 0.5em;
    border-bottom: 2px solid $color__border-button;
}

td {
    padding: 0.5em;
    border-bottom: 1px solid $color__border-button;
}
`,[`${e.themeName}/sass/forms/_forms.scss`]:`/*--------------------------------------------------------------
# Forms
--------------------------------------------------------------*/
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
    border: 1px solid;
    border-color: $color__border-button;
    border-radius: 3px;
    background: $color__background-button;
    color: $color__text-main;
    padding: 0.5em 1em;
    cursor: pointer;

    &:hover {
        border-color: $color__border-button-hover;
    }

    &:active,
    &:focus {
        border-color: $color__border-button-focus;
    }
}

input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="search"],
input[type="number"],
input[type="tel"],
input[type="range"],
input[type="date"],
input[type="month"],
input[type="week"],
input[type="time"],
input[type="datetime"],
input[type="datetime-local"],
input[type="color"],
textarea {
    color: $color__text-input;
    border: 1px solid $color__border-input;
    border-radius: 3px;
    padding: 0.5em;

    &:focus {
        color: $color__text-input-focus;
    }
}

select {
    border: 1px solid $color__border-input;
    padding: 0.5em;
}

textarea {
    width: 100%;
}
`,[`${e.themeName}/sass/navigation/_navigation.scss`]:`/*--------------------------------------------------------------
# Navigation
--------------------------------------------------------------*/
.main-navigation {
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        position: relative;
    }

    a {
        display: block;
        padding: 0.5em 1em;
        text-decoration: none;
    }

    .current-menu-item > a {
        font-weight: bold;
    }
}

/* Small menu */
.menu-toggle {
    display: none;
}

@media screen and (max-width: $breakpoint-small) {
    .menu-toggle {
        display: block;
        padding: 0.5em 1em;
        cursor: pointer;
    }

    .main-navigation ul {
        display: none;
        flex-direction: column;
    }

    .main-navigation.toggled ul {
        display: flex;
    }
}

/* Pagination */
.pagination {
    display: flex;
    justify-content: center;
    margin: $size__spacing-unit 0;
    list-style: none;

    .page-numbers {
        padding: 0.5em 1em;
        margin: 0 0.25em;
        border: 1px solid $color__border-input;

        &.current {
            background: $color__background-button;
        }
    }
}
`,[`${e.themeName}/sass/modules/_accessibility.scss`]:`/*--------------------------------------------------------------
# Accessibility
--------------------------------------------------------------*/
.screen-reader-text {
    @include screen-reader-text;
}

.screen-reader-text:focus {
    clip: auto !important;
    display: block;
    height: auto;
    left: 5px;
    top: 5px;
    width: auto;
    z-index: 100000;
}

.skip-link {
    @include screen-reader-text;

    &:focus {
        background-color: #f1f1f1;
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
        clip: auto !important;
        color: #21759b;
        display: block;
        font-size: 0.875rem;
        font-weight: 700;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000;
    }
}
`,[`${e.themeName}/sass/modules/_alignments.scss`]:`/*--------------------------------------------------------------
# Alignments
--------------------------------------------------------------*/
.alignleft {
    display: inline;
    float: left;
    margin-right: $size__spacing-unit;
}

.alignright {
    display: inline;
    float: right;
    margin-left: $size__spacing-unit;
}

.aligncenter {
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
`,[`${e.themeName}/sass/modules/_clearings.scss`]:`/*--------------------------------------------------------------
# Clearings
--------------------------------------------------------------*/
.clear:before,
.clear:after,
.entry-content:before,
.entry-content:after,
.comment-content:before,
.comment-content:after,
.site-header:before,
.site-header:after,
.site-content:before,
.site-content:after,
.site-footer:before,
.site-footer:after {
    content: "";
    display: table;
    table-layout: fixed;
}

.clear:after,
.entry-content:after,
.comment-content:after,
.site-header:after,
.site-content:after,
.site-footer:after {
    clear: both;
}
`,[`${e.themeName}/sass/layout/_layout.scss`]:`/*--------------------------------------------------------------
# Layout
--------------------------------------------------------------*/
.site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.site-content {
    flex: 1;
    padding: $size__spacing-unit;
}

.site-main {
    margin-bottom: $size__spacing-unit;
}

@media screen and (min-width: $breakpoint-medium) {
    .content-area {
        float: left;
        width: 70%;
    }

    .widget-area {
        float: right;
        width: 25%;
    }
}

/* Full width layout */
.no-sidebar {
    .content-area {
        float: none;
        width: 100%;
    }

    .widget-area {
        display: none;
    }
}
`,[`${e.themeName}/sass/site/secondary/_widgets.scss`]:`/*--------------------------------------------------------------
# Widgets
--------------------------------------------------------------*/
.widget {
    margin: 0 0 $size__spacing-unit;
    padding: $size__spacing-unit;
    background: rgba(0, 0, 0, 0.01);

    select {
        max-width: 100%;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}

.widget-title {
    margin: 0 0 ($size__spacing-unit * 0.5);
    font-size: 1.2rem;
}
`,[`${e.themeName}/sass/site/_site.scss`]:`/*--------------------------------------------------------------
# Site
--------------------------------------------------------------*/
.site-header {
    padding: $size__spacing-unit;
    background: #f5f5f5;
}

.site-branding {
    margin-bottom: $size__spacing-unit;
}

.site-title {
    margin: 0;
    font-size: 1.5rem;

    a {
        text-decoration: none;
    }
}

.site-description {
    margin: 0;
    color: #767676;
    font-size: 0.875rem;
}

.site-footer {
    padding: $size__spacing-unit;
    background: #f5f5f5;
    text-align: center;
}

/* Posts and pages */
.entry-header,
.entry-footer {
    margin-bottom: $size__spacing-unit;
}

.entry-title {
    margin: 0;
    font-size: 2rem;

    a {
        text-decoration: none;
    }
}

.entry-meta,
.entry-footer {
    font-size: 0.875rem;
    color: #767676;

    a {
        color: inherit;
    }
}

.page-header {
    margin-bottom: $size__spacing-unit;
}

.page-title {
    margin: 0;
}

.post-thumbnail {
    margin-bottom: $size__spacing-unit;
}

/* Comments */
.comment-list {
    list-style: none;
    margin: 0;
    padding: 0;

    .children {
        list-style: none;
        margin-left: $size__spacing-unit;
        padding-left: $size__spacing-unit;
        border-left: 1px solid $color__border-input;
    }
}

.comment-body {
    margin-bottom: $size__spacing-unit;
    padding: $size__spacing-unit;
    background: rgba(0, 0, 0, 0.01);
}

.comment-meta {
    margin-bottom: ($size__spacing-unit * 0.5);
    font-size: 0.875rem;
}

.comment-author {
    font-weight: bold;
}

.comment-content {
    a {
        word-wrap: break-word;
    }
}

.comment-reply-link {
    font-size: 0.875rem;
}
`,[`${e.themeName}/sass/media/_media.scss`]:`/*--------------------------------------------------------------
# Media
--------------------------------------------------------------*/
.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley {
    border: none;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
}

/* Make sure embeds and iframes fit their containers */
embed,
iframe,
object {
    max-width: 100%;
}

/* Captions */
.wp-caption {
    margin-bottom: $size__spacing-unit;
    max-width: 100%;

    img[class*="wp-image-"] {
        display: block;
        margin: 0 auto;
    }
}

.wp-caption-text {
    text-align: center;
    font-size: 0.875rem;
    padding: 0.5em;
    background: rgba(0, 0, 0, 0.01);
}

/* Galleries */
.gallery {
    margin-bottom: $size__spacing-unit;
    @include clearfix;
}

.gallery-item {
    float: left;
    margin: 0 0 $size__spacing-unit;
    text-align: center;
    width: 100%;

    @for $i from 2 through 9 {
        .gallery-columns-#{$i} & {
            width: floor(percentage(1 / $i) * 100) / 100;
        }
    }
}

.gallery-caption {
    display: block;
    font-size: 0.875rem;
    padding: 0.5em 0;
}
`}}function O(e){return{[`${e.themeName}/inc/woocommerce.php`]:`<?php
/**
 * WooCommerce compatibility functions
 *
 * @package ${e.textDomain}
 */

function ${e.textDomain}_woocommerce_setup() {
  add_theme_support('woocommerce');
  add_theme_support('wc-product-gallery-zoom');
  add_theme_support('wc-product-gallery-lightbox');
  add_theme_support('wc-product-gallery-slider');
}
add_action('after_setup_theme', '${e.textDomain}_woocommerce_setup');

/**
 * WooCommerce specific scripts & stylesheets.
 */
function ${e.textDomain}_woocommerce_scripts() {
  wp_enqueue_style('${e.textDomain.replace(/_/g,"-")}-woocommerce-style', get_template_directory_uri() . '/woocommerce.css');
}
add_action('wp_enqueue_scripts', '${e.textDomain}_woocommerce_scripts');

/**
 * Add 'woocommerce-active' class to the body tag.
 */
function ${e.textDomain}_woocommerce_active_body_class($classes) {
  $classes[] = 'woocommerce-active';
  return $classes;
}
add_filter('body_class', '${e.textDomain}_woocommerce_active_body_class');

/**
 * Remove default WooCommerce wrapper.
 */
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', '${e.textDomain}_woocommerce_wrapper_before', 10);
add_action('woocommerce_after_main_content', '${e.textDomain}_woocommerce_wrapper_after', 10);

function ${e.textDomain}_woocommerce_wrapper_before() {
  echo '<main id="primary" class="site-main">';
}

function ${e.textDomain}_woocommerce_wrapper_after() {
  echo '</main>';
}

/**
 * Remove the breadcrumbs 
 */
add_action('init', '${e.textDomain}_remove_wc_breadcrumbs');
function ${e.textDomain}_remove_wc_breadcrumbs() {
  remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
}
`,[`${e.themeName}/woocommerce.php`]:`<?php
/**
 * WooCommerce template overrides
 *
 * @package ${e.textDomain}
 */

// Override WooCommerce templates by adding files to yourtheme/woocommerce/
`,[`${e.themeName}/woocommerce.css`]:`/* WooCommerce styles */
.woocommerce .woocommerce-breadcrumb {
  margin: 0 0 1em;
  font-size: 0.875em;
}

.woocommerce .products ul,
.woocommerce ul.products {
  margin: 0 0 1em;
  padding: 0;
  list-style: none outside;
  clear: both;
}

.woocommerce .products li,
.woocommerce ul.products li {
  list-style: none outside;
}

.woocommerce .woocommerce-result-count {
  float: left;
  margin: 0 0 1em;
}

.woocommerce .woocommerce-ordering {
  float: right;
  margin: 0 0 1em;
}

.woocommerce .woocommerce-ordering select {
  vertical-align: top;
}

.woocommerce .products::after,
.woocommerce .products::before,
.woocommerce ul.products::after,
.woocommerce ul.products::before {
  content: ' ';
  display: table;
}

.woocommerce .products::after,
.woocommerce ul.products::after {
  clear: both;
}

@media (max-width: 768px) {
  .woocommerce .woocommerce-result-count,
  .woocommerce .woocommerce-ordering {
    float: none;
    margin-bottom: 1em;
  }
}
`,[`${e.themeName}/woocommerce/single-product.php`]:`<?php
/**
 * The WooCommerce single product template
 *
 * @package ${e.textDomain}
 */

get_header('shop'); ?>

  <?php while (have_posts()) : the_post(); ?>
    <?php wc_get_template_part('content', 'single-product'); ?>
  <?php endwhile; ?>

<?php get_footer('shop'); ?>
`,[`${e.themeName}/woocommerce/archive-product.php`]:`<?php
/**
 * The WooCommerce product archive template
 *
 * @package ${e.textDomain}
 */

get_header('shop'); ?>

  <?php if (have_posts()) : ?>
    <?php woocommerce_product_loop_start(); ?>
      <?php while (have_posts()) : the_post(); ?>
        <?php wc_get_template_part('content', 'product'); ?>
      <?php endwhile; ?>
    <?php woocommerce_product_loop_end(); ?>
  <?php endif; ?>

<?php get_footer('shop'); ?>
`}}function G(e){return`=== ${e.displayThemeName} ===
Contributors: ${e.author}
Requires at least: WordPress 5.0
Tested up to: ${new Date().getFullYear()}.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

== Description ==
${e.description}

== Installation ==
1. Upload the theme folder to your wp-content/themes directory
2. Activate the theme through the Appearance > Themes menu

== Frequently Asked Questions ==
= How do I set up the theme? =
After activation, go to Appearance > Customize to configure theme options.

= How do I change the colors? =
You can modify colors in Appearance > Customize > Colors.

== Changelog ==
= 1.0.0 =
* Initial release

== Credits ==
* Based on Underscores https://underscores.me/
* Normalize.css https://necolas.github.io/normalize.css/
`}export{Y as default};

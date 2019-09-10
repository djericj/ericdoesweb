import React from "react";

export const NavHeader = () => {
  return (
    <header id="header" class="bg-black dark hidden-sm hidden-xs">
      <div class="logo bg-primary">
        <h1 class="name">
          Jessica <strong>Morak</strong>
        </h1>
        <span class="caption text-secondary">professional trainer</span>
      </div>

      <nav id="main-menu">
        <ul class="nav nav-vertical">
          <li>
            <a href="#start" class="active">
              <span>Start</span>
            </a>
          </li>
          <li>
            <a href="#resume" class="">
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" class="">
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <span>Testimonials</span>
            </a>
          </li>
          <li>
            <a href="#posts">
              <span>Latest Posts</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="page-vertical.html" target="_blank">
              <span>Promo Page</span>
              <span class="label label-primary margin-l-10">NEW!</span>
            </a>
          </li>
          <li>
            <a href="documentation.html" target="_blank">
              <span>Documentation</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="social-media">
        <strong class="text-sm hidden-md">Check my social media!</strong>
        <ul class="list-inline margin-t-10">
          <li>
            <a href="#" class="icon icon-xs">
              <i class="fa fa-facebook text-muted"></i>
            </a>
          </li>
          <li>
            <a href="#" class="icon icon-xs">
              <i class="fa fa-twitter text-muted"></i>
            </a>
          </li>
          <li>
            <a href="#" class="icon icon-xs">
              <i class="fa fa-google-plus text-muted"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavHeader;

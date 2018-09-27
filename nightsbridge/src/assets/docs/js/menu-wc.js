'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">nightsbridge documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' : 'data-target="#xs-components-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' : 'id="xs-components-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MenuListItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuListItemsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MissingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MissingComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OverlayPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverlayPanelComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OverlayPanelHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverlayPanelHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SliderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StyleGuideComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StyleGuideComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' : 'data-target="#xs-injectables-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' : 'id="xs-injectables-links-module-AppModule-f2be11e7bc01a73300609dfd6fccdf50"' }>
                                        <li class="link">
                                            <a href="injectables/MainMenuService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MainMenuService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/OverlayPanelService.html" data-type="entity-link">OverlayPanelService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/WizardService.html" data-type="entity-link">WizardService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});

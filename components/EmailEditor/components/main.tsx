import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export const MainComponent = () => {
  const { t: translate } = useTranslation('common');

  return (
    <>
      <link
        href="https://fontsgoogleapiscom/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fontsgoogleapiscom/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />
      <div
        className="loading-page-overlay"
        style={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: '#eee',
          zIndex: 1000,
        }}
      >
        <div>
          <div>
            <img width="60px" src="image/page-loadinggif" />
          </div>
          <label
            style={{ marginBottom: 0, marginTop: '-5px', fontSize: '95%' }}
          >
            Starting
          </label>
        </div>
      </div>
      <div className="wrapper">
        <div className="top container-fluid">
          <div className="row">
            <div className="col-md-6 top-left float-left">
              <ul className="menu-bar">
                <li>
                  <div className="logo">
                    <img
                      className="logo-img"
                      src="image/builderjs_color_logopng"
                    />
                  </div>
                </li>
                <li>
                  <div className="action-menu design-menu">
                    <span className="action-design">
                      {translate('menubaritemsdesign')}
                    </span>
                    <span className="material-icons">expand_more</span>
                    <ul className="design display">
                      <li>
                        <a className="design-new" href="#">
                          
                          {translate('menubaritemsdesignsnew')}
                        </a>
                      </li>
                      <li>
                        <a className="design-clear" href="#">
                          
                          {translate('menubaritemsdesignsclear')}
                        </a>
                      </li>
                      <li>
                        <a className="design-from-template" href="#">
                          {translate('menubaritemsdesignsnew_template')}
                        </a>
                      </li>
                      <li>
                        <a className="design-upload-template" href="#">
                          {translate('menubaritemsdesignsupload_template')}
                        </a>
                      </li>
                      <li>
                        <a className="save-design" href="#">
                          
                          {translate('menubaritemsdesignssave')}
                        </a>
                      </li>
                      <li>
                        <a
                          className="design-exit back"
                          href="#"
                          data-method="POST"
                        >
                          {translate('menubaritemsdesignsexit')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="choose-template-menu">
                  <div className="action-menu action-choose-template">
                    <span className="choose">
                      {translate('menubaritemschange_template')}
                    </span>
                    <span className="material-icons">expand_more</span>
                    <div className="show-list-template">
                      <ul className="display-template display"></ul>
                    </div>
                    {/*show thumbnail image template*/}
                    <div className="template-thumbnail">
                      <img className="img-template" src="http://googlecom" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="action-menu action action-preview preview-page">
                    <span className="ac">
                      {translate('menubaritemspreview')}
                    </span>
                    <span className="material-icons">expand_more</span>
                    <ul className="display">
                      <li>
                        <a className="preview-design-desktop" href="#">
                          {translate('menubaritemspreviewsdesktop')}
                        </a>
                      </li>
                      <li>
                        <a className="preview-design-mobile" href="#">
                          
                          {translate('menubaritemspreviewsmobile')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="action-menu view-mode">
                    <span className="ac" id="show-mode">
                      {translate('menubaritemsmode_design')}
                    </span>
                    <span className="material-icons">expand_more</span>
                    <ul className="display-view-mode">
                      <li>
                        <a className="view-mode-design" href="#">
                          
                          {translate('menubaritemsmode_designsdesign')}
                        </a>
                      </li>
                      <li>
                        <a className="view-mode-source" href="#">
                          
                          {translate('menubaritemsmode_designssource')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 top-right float-right">
              <div className="mode-device ml-auto" style={{}}>
                <li
                  className="device mode-mobile"
                  data-mode="mode-mobile"
                  title={translate('menubaritemsdevicesmobile')}
                >
                  <span
                    className="material-icons-outlined icon-mode"
                    style={{ color: 'rgb(150, 150, 150)' }}
                  >
                    smartphone
                  </span>
                </li>
                <li
                  className="device mode-tablet"
                  data-mode="mode-tablet"
                  title={translate('menubaritemsdevicestablet')}
                >
                  <span
                    className="material-icons-outlined icon-mode"
                    style={{ color: 'rgb(150, 150, 150)' }}
                  >
                    tablet_android
                  </span>
                </li>
                <li
                  className="device mode-desktop"
                  data-mode="mode-desktop"
                  title={translate('menubaritemsdevicesdesktop')}
                >
                  <span className="material-icons-outlined icon-mode">
                    computer
                  </span>
                </li>
              </div>
              <ul className="icons">
                <li className="ask-help">
                  <span className="material-icons-outlined icon mr-1">
                    help_outline
                  </span>
                  <span className="help">
                    {translate('menubaritemshelp')}
                  </span>
                </li>
              </ul>
              {/*<div class="sync">
          <button class="btn btn-primary btn-sync"><i class="fab fa-google"></i> {translate('menubaritemssync} </button>
          <span class="choose-sync"><i class="{builder-icon-angle-down}"></span>
          <ul class="action-sync">
              <li class="synchronization google-driver" data-sync="google-driver" data-title={translate('menubaritemssyncsgoogle_drivertitle}" disable="disable')"
                  {translate('menubaritemssyncsgoogle_driver}
              </li>
              <li class="synchronization dropbox" data-sync="dropbox" data-title={translate('menubaritemssyncsdropbox}')"
                  {translate('menubaritemssyncsdropbox}
              </li>
              <li class="synchronization one-driver" data-sync="one-driver" data-title={translate('menubaritemssyncsone_driver}')"
                  {translate('menubaritemssyncsone_driver}
              </li>
              <li class="setting">
                  {translate('menubaritemssyncssetting}
              </li>
          </ul>
      </div>
      
      <div class="lang">
          <button class="btn btn-primary btn-sync"><i class="fab fa-google"></i> {translate('menubaritemslang} </button>
          <span class="choose-lang"><i class="{builder-icon-angle-down}"></span>
          <ul class="action-lang">
              <li class="change-language lang-en" data-lang="english" data-title={translate('menubaritemslangeng}" disable="disable')"
                  {translate('menubaritemslangeng}
              </li>
              <li class="change-language lang-vi" data-lang="vietname" data-title={translate('menubaritemslangvie}')"
                  {translate('menubaritemslangvie}
              </li>
              <li class="change-language lang-jp" data-lang="japan" data-title={translate('menubaritemslangjpa}')"
                  {translate('menubaritemslangjpa}
              </li>
              <li class="setting">
                  {translate('menubaritemslangsetting}
              </li>
          </ul>
      </div>*/}
              <div className="d-flex align-items-center">
                <a className="save-design" href="#">
                  <button className="btn btn-primary btn-save menu-bar-action">
                    {translate('menubaritemssave')}
                  </button>
                </a>
                <a className="save-and-close" href="#">
                  <button className="btn btn-primary btn-save-and-close menu-bar-action">
                    {translate('menubaritemssave_and_close')}
                  </button>
                </a>
                <a className="export-button" href="#">
                  <button className="btn btn-primary btn-export menu-bar-action">
                    {translate('export')}
                  </button>
                </a>
                <a className="builder-close" href="#">
                  <button className="btn btn-primary btn-close menu-bar-action">
                    <i className="{builder-icon-cross}" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end top*/}
        <div className="content container-fluid">
          <div className="">
            <div className="content-container">
              <div
                className="content-left"
                id="editable"
                contentEditable="true"
              >
                <div className="content-background">
                  <iframe
                    className="col-lg-12 col-md-12 col-sm-12"
                    id="builder_iframe"
                    width="100%"
                    height="100%"
                    // onload="thisstyleheight=thiscontentDocumentbodyscrollHeight +'px';"
                    scrolling="no"
                    style={{}}
                  />
                </div>
              </div>
              {/* end content-left */}
            </div>
            <div className="side-panel-container">
              <div id="builder_sidebar" className="content-right">
                <nav className="" style={{}}>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-content"
                      aria-selected="true"
                    >
                      <span className="flex align-items-center">
                        <span className="material-icons-outlined mr-2">
                          developer_board
                        </span>
                        <span>
                          {translate('navbarcontentswidgets')}
                        </span>
                      </span>
                    </a>
                    <a
                      style={{ display: 'none' }}
                      className="nav-item nav-link"
                      id="nav-layouts-tab"
                      data-toggle="tab"
                      href="#nav-layouts"
                      role="tab"
                      aria-controls="nav-row"
                      aria-selected="false"
                    >
                      <span className="flex align-items-center">
                        <span className="material-icons-outlined mr-2">
                          local_offer
                        </span>
                        <span>
                          {translate('navbarcontentslayouts')}
                        </span>
                      </span>
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-setting"
                      aria-selected="false"
                    >
                      <span className="flex align-items-center">
                        <span className="material-icons-outlined mr-2">
                          local_offer
                        </span>
                        <span>
                          {translate('navbarcontentstags')}
                        </span>
                      </span>
                    </a>
                    <a
                      href="javascript:;"
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                    >
                      <span className="flex align-items-center">
                        <span className="material-icons-outlined mr-2">
                          settings
                        </span>
                        <span>
                          {translate('navbarcontentssetting')}
                        </span>
                      </span>
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="container modules widgets-sections">
                      <div className="widgets-section widgets-form">
                        <label className="block-title">
                          {translate('sectionform_elements')}
                        </label>
                        <div className="widgets-form-container fields-container">
                          <div className="text-center full-width">
                            {translate('navbarcontentsloading')}
                          </div>
                          {/*load khoi xoay */}
                        </div>
                      </div>
                      <div className="widgets-section widgets-other mb-4">
                        <label className="block-title">
                          {translate('sectiongeneral')}
                        </label>
                        <div className="content_widget_container">
                          {translate('navbarcontentsloading')}
                          {/*load khoi xoay */}
                        </div>
                        <div
                          className="load-show_more"
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <a
                            className="link-widget link-show_more"
                            title="Show more widget"
                            style={{
                              cursor: 'pointer',
                              padding: '5px 20px',
                              background: '#e5e5e5',
                              borderRadius: 2,
                            }}
                          >
                            {translate('navbarcontentsshow_moreloading')}
                          </a>
                          <a
                            className="link-widget link-hide_less"
                            title="Show less widget"
                            style={{
                              cursor: 'pointer',
                              padding: '5px 20px',
                              background: '#e5e5e5',
                              borderRadius: 2,
                              display: 'none',
                            }}
                          >
                            {translate('navbarcontentsshow_lessloading')}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="container detail-content">
                      <div className="properties-pannel-title">
                        <h4>
                          {translate('navbarcontentscontent_property')}
                        </h4>
                        <div className="action">
                          <a
                            className="delete builder-remove-selected-button"
                            href="javascript:;"
                            data-toggle="tooltip"
                            title={translate('navbaritemsactionsdelete')}
                          >
                            <span className="material-icons-outlined">
                              delete
                            </span>
                          </a>
                          <a
                            className="duplicate builder-duplicate-selected-button"
                            href="javascript:;"
                            title={translate('navbaritemsactionsduplicate')}
                          >
                            <span
                              className="material-icons-outlined"
                              style={{ fontSize: 20 }}
                            >
                              filter_none
                            </span>
                          </a>
                          <a
                            className="move"
                            href="javascript:;"
                            title={translate('navbaritemsactionsdown')}
                          >
                            <span className="material-icons-outlined">
                              keyboard_arrow_down
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="properties-pannel-content attributes-container"></div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    {/* <div class="container rows-module" style="">
                      <div class="row row_widget_container">
                          {translate('navbarcontentsloading}
                      </div>
                  </div> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-layouts"
                    role="tabpanel"
                    aria-labelledby="nav-layouts-tab"
                  >
                    <div className="container rows-module" style={{}}>
                      <div className="row row_widget_container">
                        {translate('navbarcontentsloading')}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="container setting-module">
                      <ul className="tags-value"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 view-source">
              <div id="editor">{/*content template*/}</div>
            </div>
          </div>
        </div>
        {/* end container-fluid*/}
        <div className="undo-redo">
          <div className="undo-redo-actions">
            <button
              className="undo-redo-action-history"
              data-toggle="tooltip"
              title="{translate('bottombaritemshistory}"
              style={{ borderRadius: 2 }}
            >
              <i className="{builder-icon-history} history" />
            </button>
            <button
              className="undo-redo-action-undo"
              data-toggle="tooltip"
              title="{translate('bottombaritemsundo}"
            >
              <i className="{builder-icon-reply} history" />
            </button>
            <button
              className="undo-redo-action-redo disable-redo"
              data-toggle="tooltip"
              title="{translate('bottombaritemsredo}"
            >
              <i
                className="{builder-icon-reply} history"
                style={{ transform: 'rotateY(165deg)' }}
              />
            </button>
          </div>
          {/*history*/}
          <div
            ng-if="historyOpen"
            className="undo-redo__history--wrapper ng-scope"
            style={{ display: 'none' }}
          >
            <div
              ng-transclude=""
              mailup-common-scrollbar=""
              className="ng-isolate-scope"
              style={{ height: '100%', position: 'relative' }}
            >
              <div
                className="undo-redo__history undo-redo__history--open ng-scope mailup-common-scrollable-container ps-container ps-theme-default ps-active-y"
                data-ps-id="3934d02e-7a69-b8f0-1c88-d7d2783b123d"
              >
                <ul id="undo-redo__history" className=""></ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ui-pnotify bg-warning bg-as notification-area"
          style={{
            backgroundColor: '#d8eacc !important',
            width: 'auto',
            right: 10,
            top: 'auto',
            bottom: 39,
            opacity: 1,
            display: 'none',
            overflow: 'visible',
            cursor: 'auto',
          }}
        >
          <div
            className="alert ui-pnotify-container ui-pnotify-shadow"
            style={{
              minHeight: 16,
              overflow: 'hidden',
              position: 'relative',
              paddingLeft: 20,
              paddingRight: 41,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <div className="ui-pnotify-text" style={{ fontSize: 14 }}></div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="col-md-6 footer-left">
              <a href="#" className="back footer-exit-without-save">
                <i className="{builder-icon-angle-left}" />
                <p>
                  {translate('bottombaritemsexit')}
                </p>
              </a>
            </div>
            <div className="col-md-6 footer-right">
              <span
                style={{
                  fontSize: 13,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                {translate('bottombaritemslast_save')}
              </span>
            </div>
          </div>
        </footer>
        {/* end footer*/}
        <div className="box-popup-right" title="Show apps">
          <span className="material-icons-outlined icon">chevron_left</span>
        </div>
      </div>
      {/* end wrapper*/}
    </>
  );
};

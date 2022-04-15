import React from 'react';

export const OtherComponent = () => {
  return (
    <>
      <div className="showPreview">
        <div
          id="modal-preview-desktop"
          className="modal preview-modal ng-scope ng-isolate-scope in"
          style={{}}
        >
          <div
            className="modal-dialog"
            style={{
              width: '100%',
              maxWidth: '100%',
              margin: 0,
              height: '100%',
              position: 'fixed',
            }}
          >
            <div
              className="modal-content"
              uib-modal-transclude=""
              style={{ width: '100%', borderRadius: 0, height: '100%' }}
            >
              <div
                className="modal-header row ng-scope"
                style={{
                  borderBottom: '1px solid #e5e5e5',
                  background: '#fff',
                  padding: '10px 24px !important',
                }}
              >
                <div className="col-lg-6 col-md-6">
                  <h3
                    className="ng-binding"
                    style={{
                      fontSize: 16,
                      margin: 0,
                      padding: 0,
                      lineHeight: 38,
                      color: '#505659',
                      fontWeight: 700,
                      float: 'left',
                      fontStyle: 'normal',
                    }}
                  >
                    {'{'}language.wpanel.others.preview_mode.title{'}'}
                  </h3>
                  <div
                    ng-model="conditions"
                    className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty"
                  ></div>
                </div>
                <div className="col-lg-6 col-md-6 text-right">
                  <div
                    className="btn-group switch-preview ng-pristine ng-untouched ng-valid ng-not-empty active-desktop"
                    data-toggle="buttons"
                    ng-model="previewStyle"
                    ng-class="{'active-desktop': previewStyle==='desktop', 'active-mobile': previewStyle==='mobile'}"
                  >
                    <div className="pr-desktop click-active-preview">
                      <label
                        className="preview-desktop ng-pristine ng-untouched ng-valid ng-binding ng-not-empty active"
                        ng-model="previewStyle"
                        uib-btn-radio="'desktop'"
                      >
                        <i className="{builder-icon-laptop}" />
                        {'{'}language.wpanel.others.desktop.title{'}'}
                      </label>
                    </div>
                    <div className="pr-mobile click-active-preview">
                      <label
                        className="preview-mobile ng-pristine ng-untouched ng-valid ng-binding ng-not-empty"
                        ng-model="previewStyle"
                        uib-btn-radio="'mobile'"
                      >
                        <i className="{builder-icon-mobile}" />
                        {'{'}language.wpanel.others.mobile.title{'}'}
                      </label>
                    </div>
                    <div className="switch-preview__active" />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary close-preview"
                    ng-click="cancel()"
                  >
                    <i className="{builder-icon-times-circle}" />
                  </button>
                </div>
              </div>
              {/*modal load content desktop*/}
              <div className="modal-body-preview ng-scope" style={{}}>
                <div className="desktop ng-not-empty" style={{}}>
                  <div
                    ng-transclude=""
                    mailup-common-scrollbar=""
                    className="ng-isolate-scope"
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    <div
                      className="containter-preview ng-scope mailup-common-scrollable-container ps-container ps-theme-default ps-active-y"
                      style={{ width: '100%', overflowY: 'auto' }}
                    >
                      <iframe
                        id="previewIframeDesktop"
                        src=""
                        scrolling="no"
                        onload="this.style.height=this.contentDocument.body.scrollHeight +'px';"
                        style={{
                          width: '100%',
                          margin: '0 auto',
                          border: 'none',
                        }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              {/*modal load content mobile*/}
              <div
                className="modal-body-preview-mobile ng-scope bananaphone"
                style={{}}
              >
                <div className="mobile ng-not-empty-mobile" style={{}}>
                  <div
                    ng-transclude=""
                    mailup-common-scrollbar=""
                    className="ng-isolate-scope"
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    <div
                      className="containter-preview ng-scope mailup-common-scrollable-container ps-container ps-theme-default ps-active-y"
                      style={{ width: '100%', overflowY: 'auto' }}
                    >
                      <iframe
                        id="previewIframeMobile"
                        src=""
                        scrolling="no"
                        onload="this.style.height=this.contentDocument.body.scrollHeight +'px';"
                        style={{
                          width: '100%',
                          margin: '0 auto',
                          border: 'none',
                          height: 2000,
                        }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal-bg-preview-desktop"
          className="modal-backdrop ng-scope in"
          style={{ zIndex: 1040, backgroundColor: '#000085' }}
        />
      </div>
      <div className="modal" id="builderModal">
        <div className="default-popup">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header text-center">
                <h4 className="modal-title w-100" id="popupTitle">
                  {'{'}language.wpanel.others.change_image.title{'}'}
                </h4>
                <button
                  type="button"
                  className="close PopUpCloseButton"
                  data-dismiss="modal"
                >
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body PopUpContent">
                {'{'}language.wpanel.others.loading.title{'}'}
              </div>
            </div>
          </div>
        </div>
        <div className="right-popup">
          <div className="right-box">
            <div className="show-box-popup">
              <ul className="box-mode">
                <li
                  id="box-mode-mobile"
                  className="box-mode-mobile box-device"
                  title="Mobile"
                  data-mode="mode-mobile"
                >
                  <div className="group">
                    <span className="material-icons-outlined icon">
                      smartphone
                    </span>
                    <span>
                      {'{'}language.wpanel.others.mobile.title{'}'}
                    </span>
                  </div>
                  <ul className="group-device group-mobile">
                    <li className="device-screen _320">
                      {'{'}language.wpanel.others.mobile.320.title{'}'}
                    </li>
                    <li className="device-screen _360">
                      {'{'}language.wpanel.others.mobile.360.title{'}'}
                    </li>
                    <li className="device-screen _375">
                      {'{'}language.wpanel.others.mobile.375.title{'}'}
                    </li>
                    <li className="device-screen _414">
                      {'{'}language.wpanel.others.mobile.414.title{'}'}
                    </li>
                  </ul>
                </li>
                <li
                  id="box-mode-tablet"
                  className="box-mode-tablet box-device"
                  title="Tablet"
                  data-mode="mode-tablet"
                >
                  <div className="group">
                    <span className="material-icons-outlined icon">
                      tablet_android
                    </span>
                    <span>
                      {'{'}language.wpanel.others.tablet.title{'}'}
                    </span>
                  </div>
                  <ul className="group-device group-tablet">
                    <li className="device-screen _768">
                      {'{'}language.wpanel.others.tablet.768.title{'}'}
                    </li>
                    <li className="device-screen _1024">
                      {'{'}language.wpanel.others.tablet.1024.title{'}'}
                    </li>
                  </ul>
                </li>
                <li
                  id="box-mode-desktop"
                  className="box-mode-desktop box-device background-active active"
                  title="Desktop"
                  data-mode="mode-desktop"
                >
                  <div className="group">
                    <span className="material-icons-outlined icon">
                      computer
                    </span>
                    <span>
                      {'{'}language.wpanel.others.desktop.title{'}'}
                    </span>
                  </div>
                  <ul className="group-device group-desktop">
                    <li className="device-screen _1280">
                      {'{'}language.wpanel.others.desktop.1280.title{'}'}
                    </li>
                    <li className="device-screen _1360">
                      {'{'}language.wpanel.others.desktop.1360.title{'}'}
                    </li>
                    <li className="device-screen _1920">
                      {'{'}language.wpanel.others.desktop.1920.title{'}'}
                    </li>
                  </ul>
                </li>
                <li
                  id="background-option"
                  className="change-background device"
                  title="Change background"
                >
                  <div className="group">
                    <span className="material-icons-outlined icon">
                      wallpaper
                    </span>
                    <span>
                      {'{'}language.wpanel.others.background.title{'}'}
                    </span>
                  </div>
                  <ul className="group-background builder-backgrounds"></ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* The Image Toolbox */}
      <div className="modal" id="ImageToolbox">
        <div className="container">
          {/* Nav tabs */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="home nav-link active nav-tab"
                data-toggle="tab"
                href="#home"
              >
                {'{'}language.wpanel.others.upload.title{'}'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu1 nav-link nav-tab"
                data-toggle="tab"
                href="#menu1"
              >
                {'{'}language.wpanel.others.url.title{'}'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu2 nav-link nav-tab"
                data-toggle="tab"
                href="#menu2"
              >
                {'{'}language.wpanel.others.base64.title{'}'}
              </a>
            </li>
            <li className="nav-item filemanager-item">
              <a
                className="menu3 nav-link nav-tab"
                data-toggle="tab"
                href="#menu3"
              >
                {'{'}language.wpanel.others.filemanager.title{'}'}
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div
              id="home"
              className="container tab-pane active nav-content active"
            >
              <p className="margin-bottom--lv4 py-2">
                {'{'}language.wpanel.others.des_upload_image.title{'}'}
              </p>
              <label className="mb-2">
                {'{'}language.wpanel.others.file.title{'}'}
              </label>
              <input
                type="file"
                name="file_upload_image"
                className="file-upload-image"
                multiple=""
                accept="image/*"
              />
              <p className="file-upload-input-title">
                <i
                  className="{builder-icon-arrow-to-bottom}"
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: 33,
                    left: '50%',
                    zIndex: 2,
                    fontSize: 30,
                    color: '#267e88',
                    transform: 'translateX(-50%)',
                  }}
                />
                <span className="des-upload">
                  {'{'}language.wpanel.others.des_drag_image.title{'}'}
                </span>
              </p>
              <div className="text-center mt-3">
                <button
                  tabIndex={0}
                  type=""
                  className="buttonSaveUpload btn btn-default"
                >
                  {'{'}language.wpanel.others.upload.title{'}'}
                </button>
              </div>
            </div>
            <div id="menu1" className="container tab-pane fade nav-content">
              <p className="margin-bottom--lv4 py-2">
                {'{'}language.wpanel.others.des_url_image.title{'}'}
              </p>
              <label className="mb-2">
                {'{'}language.wpanel.others.url.title{'}'}
              </label>
              <input
                placeholder="https://sample.com/images/example.png"
                type="text"
                name="url_image"
                className="url-image"
              />
              <div className="text-center">
                <button
                  tabIndex={0}
                  type=""
                  className="buttonSaveUrl btn btn-default"
                >
                  {'{'}language.wpanel.others.save.title{'}'}
                </button>
              </div>
            </div>
            <div id="menu2" className="container tab-pane fade nav-content">
              <p className="margin-bottom--lv4 py-2">
                {'{'}language.wpanel.others.des_base64_image.title{'}'}
              </p>
              <label className="mb-2">
                {'{'}language.wpanel.others.base64.title{'}'}
              </label>
              <textarea
                rows={5}
                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUh...."
                name="base64_image"
                className="base64-image"
                defaultValue={''}
              />
              <div className="text-center mt-3">
                <button
                  tabIndex={0}
                  type=""
                  className="buttonSaveBase64 btn btn-default"
                >
                  {'{'}language.wpanel.others.save.title{'}'}
                </button>
              </div>
            </div>
            <div
              id="menu3"
              className="container tab-pane fade nav-content filemanager-item"
              style={{ marginBottom: '-42px' }}
            >
              <iframe
                style={{
                  height: 'calc(100vh - 255px)',
                  width: '100%',
                  border: 'solid 1px #ddd',
                }}
                className="filemanager-iframe"
              />
              <div className="mt-3 text-center">
                <a
                  href="javascript:;"
                  className="btn btn-primary mr-1 filemanager-ok"
                >
                  {'{'}language.wpanel.others.filemanager.ok{'}'}
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-secondary filemanager-cancel"
                >
                  {'{'}language.wpanel.others.filemanager.cancel{'}'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="VideoToolbox">
        <div className="container">
          {/* Nav tabs */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="home nav-link active nav-tab"
                data-toggle="tab"
                href="#home"
              >
                {'{'}language.wpanel.others.upload.title{'}'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu1 nav-link nav-tab"
                data-toggle="tab"
                href="#menu1"
              >
                {'{'}language.wpanel.others.url.title{'}'}
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div id="home" className="container tab-pane active nav-content">
              <p className="margin-bottom--lv4 py-2">
                {'{'}language.wpanel.others.des_upload_video.title{'}'}
              </p>
              <label>
                {'{'}language.wpanel.others.file.title{'}'}
              </label>
              <input
                type="file"
                name="file_upload_video"
                className="file-upload-video"
                multiple=""
                accept="video/*"
              />
              <p className="file-upload-input-title">
                <i
                  className="{builder-icon-arrow-to-bottom}"
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: 25,
                    left: '50%',
                    zIndex: 2,
                    fontSize: 30,
                    color: '#267e88',
                    transform: 'translateX(-50%)',
                  }}
                />
                <span className="des-upload">
                  Drag your files here or click in this area.
                </span>
              </p>
              <button
                tabIndex={0}
                type=""
                className="buttonSaveUpload btn btn-default"
              >
                {'{'}language.wpanel.others.upload.title{'}'}
              </button>
            </div>
            <div id="menu1" className="container tab-pane fade nav-content">
              <p className="margin-bottom--lv4 py-2">
                {'{'}language.wpanel.others.des_url_video.title{'}'}
              </p>
              <label>
                {'{'}language.wpanel.others.url.title{'}'}
              </label>
              <input type="text" name="url_video" className="url-video" />
              <button
                tabIndex={0}
                type=""
                className="buttonSaveUrl btn btn-default"
              >
                {'{'}language.wpanel.others.save.title{'}'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* The Image Toolbox */}
      <div className="modal" id="WidgetNameToolbox">
        <div className="container" style={{ padding: '0 60px 30px' }}>
          <div className="form-group">
            {/*<p class="title-widget">Name your custom widget</p>*/}
            <p className="margin-bottom--lv4">
              {'{'}language.wpanel.others.des_widget_name.title{'}'}
            </p>
            <input
              type="text"
              className="form-control"
              defaultValue="My Custom Widget"
              id="CustomWidgetName"
              aria-describedby=""
              placeholder="Enter widget name"
            />
          </div>
          <button
            type="submit"
            id="buttonCustomWidget"
            className="btn btn-primary btn-add-custom-widget-[ID]"
          >
            {'{'}language.wpanel.others.add.title{'}'}
          </button>
        </div>
      </div>
      {/* The Template Toolbox */}
      <div className="modal" id="templateToolbox">
        <div className="container" style={{ marginTop: '-8px' }}>
          {/* Tab panes */}
          <div className="tab-content">
            <div id="home" className="container tab-pane active nav-content">
              <p className="margin-bottom--lv4 py-2">
                {'{'}language.wpanel.others.des_template_toolbox.title{'}'}
              </p>
            </div>
          </div>
          <div
            className="new-templates unit size1of1 tab-container"
            style={{ marginTop: 30 }}
          >
            {/*noi hien thi danh sach template*/}
            <ul
              className="c-templateSelection list-new-template"
              style={{ justifyContent: 'left', paddingLeft: 0 }}
            ></ul>
          </div>
        </div>
      </div>
      {/*The modal help builder*/}
      <div
        className="helpPopUp front-door c-interstitial position--relative topsliderpane-base"
        style={{ display: 'none', zIndex: 999 }}
      >
        <div className="flex justify-content--center position--fixed top-bottom--0 left-right--0 align-items--flex-start">
          <div className="bg-white border-radius--lv1 bg-popup" style={{}}>
            <div
              id="header-modal"
              className="full-width textcolor zin-lv2 position--static selfclear"
              data-dojo-attach-point="topBarActions"
            >
              <div className="flex flex-between">
                <ul className="close-overlay close-right absolute cursor-pointer">
                  <li className="noborder">
                    <a
                      href="javascript:"
                      data-dojo-attach-point="closeLink"
                      className="helpPopUpCloseButton closeLink c-interstitial_button nolink"
                      tabIndex={0}
                    >
                      <i className="{builder-icon-times}" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-dojo-attach-point="content"
              className="helpPopUpContent position--static flex justify-content--center overflow--auto margin--lv0"
              style={{}}
            >
              {/*load content list acticle*/}
              <iframe id="iframeLoad" className="" src="" />
            </div>
          </div>
        </div>
      </div>
      {/*The modal upload template by builder*/}
      <div className="modal" id="uploadTemplate">
        <div className="container" style={{ padding: '0 60px 30px' }}>
          <form
            className="form-upload"
            action="upload.php"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <p className="margin-bottom--lv4">
                {'{'}language.wpanel.others.des_upload_template.title{'}'}
              </p>
              <div data-dojo-attach-point="formInputs">
                <fieldset
                  className="field-wrapper"
                  id="dijit__TemplatedMixin_43"
                  widgetid="dijit__TemplatedMixin_43"
                >
                  <label>File</label>
                  <div
                    className="input-group file-upload"
                    id="drag-file-upload"
                    style={{ width: '100%', height: 'auto' }}
                  >
                    <input
                      type="file"
                      name="file"
                      className="file-upload-template"
                      multiple=""
                      style={{
                        width: '100%',
                        height: 150,
                        position: 'relative',
                        opacity: 0,
                        zIndex: 4,
                      }}
                    />
                    <p
                      className="file-upload-input-title"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        zIndex: 3,
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '100%',
                        border: '1px dashed #007c89',
                        background: '#e5f7ff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        className="material-icons-outlined icon"
                        style={{
                          fontSize: 40,
                          marginTop: '-30px',
                          color: 'rgba(0,0,0,0.4)',
                        }}
                      >
                        upload
                      </span>
                      <span
                        className="des-upload"
                        style={{
                          position: 'absolute',
                          top: 80,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Drag your files here or click in this area.
                      </span>
                    </p>
                  </div>
                </fieldset>
              </div>
            </div>
            <button
              type="submit"
              id="buttonUploadTemplate"
              className="btn btn-primary btn-upload-template-[ID]"
              style={{
                position: 'relative',
                top: 0,
                left: '50%',
                zIndex: 2,
                transform: 'translateX(-50%)',
                background: 'gray',
                outline: 'none',
                border: 'none',
              }}
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <div className="builder-tool builder-outline-selected-controls">
          <ul>
            <li
              className="builder-action-selected-button builder-select-parent-button"
              data-toggle="tooltip"
              title="{language.wpanel.others.select_parent.title}"
            >
              <span
                className="material-icons-outlined"
                style={{ fontSize: 22 }}
              >
                arrow_upward
              </span>
            </li>
            {/* <li class="builder-action-selected-button builder-add-widget-button" data-toggle="tooltip" title="{language.wpanel.others.add_widget.title}"><i class="{builder-icon-layer-plus}"></i></li> */}
            <li
              className="builder-action-selected-button builder-remove-selected-button"
              data-toggle="tooltip"
              title="{language.wpanel.others.delete.title}"
            >
              <span
                className="material-icons-outlined"
                style={{ fontSize: 22 }}
              >
                delete
              </span>
            </li>
            <li
              className="builder-action-selected-button builder-duplicate-selected-button"
              data-toggle="tooltip"
              title="{language.wpanel.others.duplicate.title}"
            >
              <span
                className="material-icons-outlined"
                style={{ fontSize: 17 }}
              >
                filter_none
              </span>
            </li>
            <li
              className="builder-action-selected-button builder-code-selected-button"
              data-toggle="tooltip"
              title="{language.wpanel.others.code.title}"
            >
              <span
                className="material-icons-outlined"
                style={{ fontSize: 22 }}
              >
                code
              </span>
            </li>
          </ul>
        </div>
        <div
          className="builder-tool builder-outline-move-hook"
          title="{language.wpanel.others.move.title}"
        >
          <span
            className="material-icons-outlined"
            style={{
              fontSize: 18,
              margin: '7px 6px',
              transform: 'rotate(45deg)',
            }}
          >
            zoom_out_map
          </span>
        </div>
      </div>
      {/*loading*/}
      <div
        className="loadding-indicator"
        style={{ display: 'none', zIndex: 999 }}
      >
        <div id="spinningSquaresG">
          <div id="spinningSquaresG_1" className="spinningSquaresG" />
          <div id="spinningSquaresG_2" className="spinningSquaresG" />
          <div id="spinningSquaresG_3" className="spinningSquaresG" />
          <div id="spinningSquaresG_4" className="spinningSquaresG" />
          <div id="spinningSquaresG_5" className="spinningSquaresG" />
          <div id="spinningSquaresG_6" className="spinningSquaresG" />
          <div id="spinningSquaresG_7" className="spinningSquaresG" />
          <div id="spinningSquaresG_8" className="spinningSquaresG" />
        </div>
      </div>
      {/* The Image Toolbox */}
      <div className="modal" id="EditHtmlModal">
        <div className="mb-4">
          <h2 className="mb-2">
            {'{'}language.edit_html_code{'}'}
          </h2>
          <textarea id="EditHtml" defaultValue={''} />
          <button
            tabIndex={0}
            type=""
            className="btn btn-secondary edit-html-save-button"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

import useTranslation from 'next-translate/useTranslation';
import React from 'react';

export const ControlComponent = () => {
  const { t: translate } = useTranslation('common');

  return (
    <div style={{ display: 'none' }}>
      {/*ButtonControl*/}
      <div id="ButtonControl">
        <div
          className="widget-section font-family pr-3 control-[ID]"
          style={{ position: 'relative' }}
        >
          <div className="label">[TITLE]</div>
          <div className="button-styles-select">
            <button className="button-preview">Abc</button>
            <div className="button_styles" style={{ display: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className="" data-style="style_1">
                  Abc
                </button>
                <button className="" data-style="style_2">
                  Abc
                </button>
                <button className="" data-style="style_3">
                  Abc
                </button>
                <button className="" data-style="style_4">
                  Abc
                </button>
                <button className="" data-style="style_5">
                  Abc
                </button>
                <button className="" data-style="style_6">
                  Abc
                </button>
                <button className="" data-style="style_7">
                  Abc
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className="" data-style="style_8">
                  Abc
                </button>
                <button className="" data-style="style_9">
                  Abc
                </button>
                <button className="" data-style="style_10">
                  Abc
                </button>
                <button className="" data-style="style_11">
                  Abc
                </button>
                <button className="" data-style="style_12">
                  Abc
                </button>
                <button className="" data-style="style_13">
                  Abc
                </button>
                <button className="" data-style="style_14">
                  Abc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*YoutubeControl*/}
      <div id="YoutubeControl">
        <div className="control-[ID]">
          <div className="widget-row px-3 py-2">
            <h4>{translate('youtube')}</h4>
            <p className="mb-2">{translate('youtubeenter_youtube_url')}</p>
            <div className="place-value">
              <span className="">
                <input
                  type="text"
                  className="youtube_url"
                  defaultValue="[CODE]"
                  style={{ width: '100%' }}
                />
              </span>
            </div>
          </div>
          <div className="widget-row px-3 py-2 d-flex align-items-center">
            <div className="label mr-auto">{translate('youtubewidth')}</div>
            <div className="place-value">
              <span className="">
                <input
                  type="text"
                  className="youtube_width"
                  defaultValue="[WIDTH]"
                />
              </span>
            </div>
          </div>
          <div className="widget-row px-3 py-2 d-flex align-items-center">
            <div className="label mr-auto">{translate('youtubeheight')}</div>
            <div className="place-value">
              <span className="">
                <input
                  type="text"
                  className="youtube_height"
                  defaultValue="[HEIGHT]"
                />
              </span>
            </div>
          </div>
          <div className="widget-row px-3 py-2 d-flex align-items-center">
            <div className="label mr-auto">{translate('youtubealignment')}</div>
            <div className="place-value">
              <span className="">
                <select className="form-control alignment">
                  <option value="">{translate('youtubedefault')}</option>
                  <option value="left">{translate('youtubeleft')}</option>
                  <option value="right">{translate('youtuberight')}</option>
                  <option value="center">{translate('youtubecenter')}</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*TableBlockControl*/}
      <div id="TableBlockControl">
        <div className="widget-section font-family pr-3 control-[ID]">
          <div className="label">[TITLE]</div>
          <select className="form-control theme">
            <option value="">Default</option>
            <option value="table-striped">Striped</option>
            <option value="table-dark">Dark</option>
            <option value="table-dark table-striped">Dark - Striped</option>
            <option value="table-bordered">Bordered</option>
            <option value="table-dark table-bordered">Dark - Bordered</option>
          </select>
        </div>
      </div>
      {/*PricingTableControl*/}
      <div id="PricingTableControl">
        <div
          className="widget-section font-family pr-3 control-[ID]"
          style={{ position: 'relative' }}
        >
          <div className="label">[TITLE]</div>
          <div className="pricing-styles-select">
            <button className="pricing-preview">Abc</button>
            <div className="pricing_styles" style={{ display: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className="" data-style="">
                  Abc
                </button>
                <button className="" data-style="dark">
                  Abc
                </button>
                <button className="" data-style="light">
                  Abc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Background Image Control*/}
      <div id="BackgroundImageControl">
        <div className="control-[ID]">
          <div className="atts-groupx">
            <div className="atts-group-containerx">
              <div className="widget-row px-3 py-2">
                <div className="d-flex align-items-center">
                  <div className="label mr-auto">
                    {translate('background_imageimage')}
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button className="btn btn-default btn-icon change-image">
                      <span className="material-icons-outlined">create</span>
                    </button>
                    <button className="btn btn-danger btn-icon clear-image">
                      <span className="material-icons-outlined">clear</span>
                    </button>
                  </div>
                  <div className="">
                    <div className="background-image-preview">
                      <img
                        className="background-image"
                        src="image/image-placeholder.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-row px-3 py-2 d-flex align-items-center">
                <div className="label mr-auto">
                  {translate('background_imagecolor')}
                </div>
                <div className="place-value">
                  <span className="color-picker">
                    <input
                      type="color"
                      className="background-color"
                      defaultValue="#ffffff"
                    />
                    <input
                      className="background-color"
                      type="text"
                      defaultValue=""
                    />
                  </span>
                </div>
              </div>
              <div className="widget-row px-3 py-2 d-flex align-items-center">
                <div className="label mr-auto">
                  {translate('background_imagerepeat')}
                </div>
                <div className="place-value">
                  <select className="background-repeat form-control enctype">
                    <option value="inherit">inherit</option>
                    <option value="initial">initial</option>
                    <option value="no-repeat">no-repeat</option>
                    <option value="repeat">repeat</option>
                    <option value="repeat-x">repeat-x</option>
                    <option value="repeat-y">repeat-y</option>
                    <option value="revert">revert</option>
                    <option value="round">round</option>
                    <option value="space">space</option>
                  </select>
                </div>
              </div>
              <div className="widget-row px-3 py-2 d-flex align-items-center">
                <div className="label mr-auto">
                  {translate('background_imagesize')}
                </div>
                <div className="place-value">
                  <input
                    type="text"
                    defaultValue={100}
                    className="form-control background-size"
                  />
                </div>
              </div>
              <div className="widget-row px-3 py-2 d-flex align-items-center">
                <div className="label mr-auto">
                  {translate('background_imageposition')}
                </div>
                <div className="place-value">
                  <input
                    type="text"
                    defaultValue={100}
                    className="form-control background-position"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Image link Control*/}
      <div id="FieldListHeaderControl">
        <div className="control-[ID]">
          <div className="widget-section link-image">
            <div className="p-3">
              <p className="d-block mb-2">
                This is an <strong>[TITLE]</strong> field is associated with the
                following mail list
              </p>
              <div className="form-disabled">
                <select className="form-control disabled" disabled="">
                  <option>[LIST_NAME]</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Image link Control*/}
      <div id="ImageLinkControl">
        <div className="control-[ID]">
          <div className="widget-section link-image">
            <div className="wg-info w-url-container d-flex align-items-center">
              <div className="tren">
                <div className="trai">
                  <span>{translate('image_link')}</span>
                </div>
              </div>
              <div className="pr-3">
                <input
                  type="text"
                  className="image-link link"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Image size Control*/}
      <div id="ImageSizeControl">
        <div className="control-[ID]">
          <div className="widget-section d-flex align-items-center pr-3">
            <div className="label mr-auto">[TITLE]</div>
            <select className="image-sizes form-control">
              <option value="100%xauto">Default - 100% width</option>
              <option value="150x150">Thumbnail - 150 x 150</option>
              <option value="300x300">Medium - 300 x 300</option>
              <option value="768xauto">Medium Large - 768 x 0</option>
              <option value="300x300">Woocommerce Thumbnail - 300 x 300</option>
              <option value="600xauto">Woocommerce Single - 600 x 0</option>
              <option value="100x100">
                Woocommerce Gallery Thumbnail - 100 x 100
              </option>
              <option value="300x300">Shop Catalog - 300 x 300</option>
              <option value="600xauto">Shop Single - 600 x 0</option>
              <option value="100x100">Shop Thumbnail - 100 x 100</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="image-size custom-size" style={{ display: 'none' }}>
            <div className="widget-section d-flex align-items-center px-3">
              <div className="mr-auto control-label">
                {translate('image_size.width')}
              </div>
              <div>
                <input
                  type="text"
                  defaultValue={100}
                  className="custom-width form-control"
                />
              </div>
            </div>
            <div className="widget-section d-flex align-items-center px-3">
              <span className="mr-auto control-label">
                {translate('image_size.height')}
              </span>
              <div>
                <input
                  type="text"
                  defaultValue={100}
                  className="custom-height form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Field Options Control*/}
      <div id="FieldOptionsControl">
        <div className="control-[ID]">
          <div className="field-options-container px-3">[OPTIONS]</div>
        </div>
      </div>
      {/*Form Control*/}
      <div id="FormControl">
        <div className="control-[ID]">
          <div className="widget-section d-flex align-items-center">
            <div className="label mr-auto">
              {translate('fieldcontrolformmethod')}
            </div>
            <div className="pr-3">
              {/* <input class="method" type="text" value="[METHOD]"/> */}
              <select name="method" className="form-control method">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
              </select>
            </div>
          </div>
          <div className="widget-section d-flex align-items-center pr-3">
            <div className="label mr-auto">
              {translate('fieldcontrolautocomplete')}
            </div>
            <div className="">
              <span className="mswitch autocomplete-switch" data-checked="true">
                <span className="material-icons text-primary">toggle_on</span>
              </span>
            </div>
          </div>
          <div className="widget-section d-flex align-items-center">
            <div className="label mr-auto">
              {translate('fieldcontrolformenctype')}
            </div>
            <div className="place-value">
              <select name="enctype" className="form-control enctype">
                <option value="application/x-www-form-urlencoded">
                  application/x-www-form-urlencoded
                </option>
                <option value="multipart/form-data">multipart/form-data</option>
                <option value="text/plain">text/plain</option>
              </select>
            </div>
          </div>
          <div className="widget-section d-flex align-items-center">
            <div className="label mr-auto">
              {translate('fieldcontrolformaccept_charset')}
            </div>
            <div className="place-value">
              <select
                name="accept_charset"
                className="form-control accept_charset"
              >
                <option value="UTF-8">UTF-8</option>
                <option value="ISO-8859-1">ISO-8859-1</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/*Captcha toggle Control*/}
      <div id="CaptchaToggleControl">
        <div className="control-[ID]">
          <div className="widget-section d-flex align-items-center pr-3">
            <div className="label mr-auto">
              {translate('fieldcontrolcaptcha')}
            </div>
            <div className="">
              <span className="mswitch captcha-switch" data-checked="true">
                <span className="material-icons text-primary">toggle_on</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*Common Field Control*/}
      <div id="SectionTitleControl">
        <div className="jumbotron jumbotron-fluid jumb-title">
          <h3 className="title">[TITLE]</h3>
        </div>
      </div>
      {/*Common Field Control*/}
      <div id="CommonFieldControl">
        <div className="control-[ID]">
          <div className="widget-section d-flex align-items-center">
            <div className="label mr-auto">
              {translate('fieldcontrolfield_name')}
            </div>
            <div className="place-value pr-3">
              <input
                className="field-name disabled"
                type="text"
                defaultValue="[FIELD_NAME]"
                disabled=""
              />
            </div>
          </div>
          <div className="widget-section d-flex align-items-center">
            <div className="label mr-auto">
              {translate('fieldcontrolfield_id')}
            </div>
            <div className="place-value pr-3">
              <div className="form-element-widget m-0">
                <input type="hidden" className="field-id" name="[FIELD_ID]" />
                <span className="icon">
                  <i
                    className="material-icons-outlined"
                    style={{ fontSize: 25, display: 'inline-block' }}
                  >
                    [ICON]
                  </i>
                </span>
                <span className="field-label-box mb-0">
                  <span className="label">[FIELD_NAME]</span>
                  <span className="small text-muted hide">[FIELD_NAME]</span>
                </span>
              </div>
              {/* <input class="field-id" type="text" value="[FIELD_NAME]"/> */}
            </div>
          </div>
          <div className="widget-section d-flex align-items-center pr-3">
            <div className="label mr-auto">
              {translate('fieldcontrolshow_label')}
            </div>
            <div className="">
              <span className="mswitch label-switch" data-checked="true">
                <span className="material-icons text-primary">toggle_on</span>
              </span>
            </div>
          </div>
          <div className="widget-section d-flex align-items-center field-label-line">
            <div className="label mr-auto">
              {translate('fieldcontrollabel')}
            </div>
            <div className="place-value pr-3">
              <input
                className="field-label"
                type="text"
                defaultValue="[LABEL]"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Validation on/off Control*/}
      <div id="ValidationControl">
        <div className="control-[ID]">
          <div className="widget-section d-flex align-items-center pr-3">
            <div className="label mr-auto font-weight-normal">
              {translate('fieldcontrolvalidationrequired')}
            </div>
            <div className="">
              <span className="mswitch required-switch" data-checked="true">
                <span className="material-icons text-primary">toggle_on</span>
              </span>
            </div>
          </div>
          <div className="validation-rules">
            <div className="widget-section d-flex align-items-center">
              <div className="label mr-auto">
                {translate('fieldcontrolvalidationmin_length')}
              </div>
              <div className="place-value pr-3">
                <input
                  className="min-length"
                  type="text"
                  defaultValue="[MIN_LENGTH]"
                />
              </div>
            </div>
            <div className="widget-section d-flex align-items-center">
              <div className="label mr-auto">
                {translate('fieldcontrolvalidationmax_length')}
              </div>
              <div className="place-value pr-3">
                <input
                  className="max-length"
                  type="text"
                  defaultValue="[MAX_LENGTH]"
                />
              </div>
            </div>
            <div className="widget-section d-flex align-items-center">
              <div className="label mr-auto">
                {translate('fieldcontrolvalidationregexp')}
              </div>
              <div className="place-value pr-3">
                <input className="regexp" type="text" defaultValue="[REGEXP]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Icon Select Control*/}
      <div id="HeadingControl">
        <div className="widget-section control-[ID] d-flex align-items-center pr-3">
          <div className="label mr-auto">[TITLE]</div>
          <select className="form-control" style={{ width: 180 }}>
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
            <option value="h4">H4</option>
            <option value="h5">H5</option>
            <option value="h6">H6</option>
          </select>
        </div>
      </div>
      {/*Text style*/}
      <div id="TextControl">
        <div className="control-[ID] px-3 py-2">
          <textarea
            className="text-content text-editor-[ID]"
            defaultValue={'[TEXT]'}
          />
        </div>
      </div>
      {/*Background color*/}
      <div id="BackgroundControl">
        <div className="widget-section link-color-element">
          <div className="label">[TITLE]</div>
          <div className="thongso">
            <span className="click-color">
              <input
                type="color"
                className="link-color"
                defaultValue="#0056b3"
                id="[AINPUT_ID]"
              />
            </span>
            <span className="value">
              <input
                className="link-color-input"
                type="text"
                defaultValue=""
                id="A-bg-color-[AINPUT_ID]"
              />
            </span>
          </div>
        </div>
      </div>
      {/*Icon Select Control*/}
      <div id="IconSelectControl">
        <div className="control-[ID]">
          <div className="widget-section d-flex align-items-center pr-3">
            <div className="label mr-auto">[TITLE]</div>
            <div
              className="icon mr-2"
              style={{ height: 32, textAlign: 'right', width: 100 }}
            />
            <select className="form-control" style={{ width: 180 }}>
              <option value="{{root}}image/icon-none.png">--</option>
              <option value="{{root}}image/facebook.png">Facebook</option>
              <option value="{{root}}image/twitter.png">Twitter</option>
              <option value="{{root}}image/instagram.png">Instagram</option>
              <option value="{{root}}image/linkedin.png">Linkedin</option>
              <option value="{{root}}image/tumblr.png">Tumblr</option>
              <option value="{{root}}image/google-plus.png">Google Plus</option>
              <option value="{{root}}image/translate('youtubepng">
                YouTube
              </option>
              <option value="{{root}}image/line.png">LINE</option>
              <option value="{{root}}image/wechat.png">WeChat</option>
              <option value="{{root}}image/weibo.png">Weibo</option>
              <option value="{{root}}image/tiktok.png">TikTok</option>
            </select>
          </div>
          <div className="widget-section d-flex align-items-center pr-3">
            <div className="label mr-auto">{translate('link')}</div>
            <div className="">
              <input
                style={{ width: 220 }}
                type="text"
                name="url"
                className="form-control url"
              />
            </div>
          </div>
          <div className="widget-section d-flex align-items-center px-2">
            <button className="btn btn-secondary mr-2 but-dup">
              {translate('widgetduplicate')}
            </button>
            <button className="btn btn-warning but-remove">
              {translate('widgetremove')}
            </button>
          </div>
        </div>
      </div>
      {/*Font family*/}
      <div id="FontFamilyControl">
        <div className="widget-section font-family pr-3 control-[ID]">
          <div className="label">[TITLE]</div>
          <select className="form-control">
            <option value="times">Times</option>
            <option value="serif">Serif</option>
            <option value="arial">Arial</option>
            <option value="tahoma">Tahoma</option>
            <option value="roboto">Roboto</option>
            <option value="segoe ui">Segoe UI</option>
          </select>
        </div>
      </div>
      {/*Text size*/}
      <div id="TextSizeControl">
        <div className="widget-section text-size control-[ID]">
          <div className="label">[TITLE]</div>
          <select className="form-control">
            <option value="8px">8px</option>
            <option value="9px">9px</option>
            <option value="10px">10px</option>
            <option value="11px" selected="">
              11px
            </option>
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="22px">22px</option>
            <option value="24px">24px</option>
            <option value="30px">30px</option>
            <option value="38px">38px</option>
            <option value="46px">46px</option>
            <option value="60px">60px</option>
            <option value="72px">72px</option>
          </select>
        </div>
      </div>
      {/*Text style*/}
      <div id="TextStyleControl">
        <div className="widget-section text-style control-[ID]">
          <div className="label">[TITLE]</div>
          <div className="icons-group">
            <ul>
              <li>
                <button className="text-style-bold">
                  <i className="{builder-icon-bold}" />
                </button>
              </li>
              <li>
                <button className="text-style-italic">
                  <i className="{builder-icon-italic}" />
                </button>
              </li>
              <li>
                <button className="text-style-underline">
                  <i className="{builder-icon-underline}" />
                </button>
              </li>
              <li>
                <button className="text-style-strikethrough">
                  <i className="{builder-icon-strikethrough}" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Text color*/}
      <div id="ColorPickerControl">
        <div className="widget-section text-color-element">
          <div className="label">[TITLE]</div>
          <div className="thongso">
            <span className="click-color">
              <input
                type="color"
                id="[PINPUT_ID]"
                className="color"
                defaultValue="#555555"
              />
            </span>
            <span className="value">
              <input
                className="text-color-input"
                type="text"
                defaultValue=""
                id="P-text-color"
              />
            </span>
          </div>
        </div>
      </div>
      {/*link color*/}
      <div id="LinkColorControl">
        <div className="widget-section link-color-element">
          <div className="label">[TITLE]</div>
          <div className="thongso">
            <span className="click-color">
              <input
                type="color"
                className="link-color"
                defaultValue="#0056b3"
                id="[AINPUT_ID]"
              />
            </span>
            <span className="value">
              <input
                className="link-color-input"
                type="text"
                defaultValue=""
                id="A-link-color-[AINPUT_ID]"
              />
            </span>
          </div>
        </div>
      </div>
      {/*Associate with tag*/}
      <div id="DropdownAssociateControl">
        <div className="widget-section widget-associate">
          <div className="label">[TITLE]</div>
          <div className="right-value">
            <select
              className="associate-dropdown"
              id="[dropdown_ID]"
              name="{GENDER}"
            >
              <option
                className="placeholder-option"
                style={{ display: 'none' }}
              >
                -- Select option --
              </option>
            </select>
          </div>
        </div>
      </div>
      {/*Associate with text*/}
      <div id="TextAssociateControl">
        <div className="widget-section widget-associate">
          <div className="label">[TITLE]</div>
          <div className="right-value right-value-text">
            <select className="associate-text" name="" id="">
              {/*tag*/}
            </select>
          </div>
        </div>
      </div>
      {/*Associate with checkbox*/}
      <div id="CheckboxAssociateControl">
        <div className="widget-section widget-associate">
          <div className="label">[TITLE]</div>
          <div className="right-value right-value-checbox">
            <select className="associate-checkbox" name="" id="">
              {/*option*/}
            </select>
          </div>
        </div>
      </div>
      {/*Placeholder*/}
      <div id="PlaceholderControl">
        <div className="widget-section placeholder placeholder-input-control">
          <div className="label">[TITLE]</div>
          <div className="place-value">
            <input
              className="placeholder placeholder-input"
              type="text"
              defaultValue=""
              name=""
            />
          </div>
        </div>
      </div>
      {/*line height*/}
      <div id="LineHeightControl">
        <div className="widget-section">
          <div className="label">[TITLE]</div>
          <div className="thongso">
            <ul>
              <li>
                <img
                  className="icon-left icon-line-height active"
                  src="image/lh1.svg"
                  line-height={1}
                />
              </li>
              <li>
                <img
                  className="icon-center icon-line-height"
                  src="image/lh2.svg"
                  line-height="1.5"
                />
              </li>
              <li>
                <img
                  className="icon-justify icon-line-height"
                  src="image/lh3.svg"
                  line-height={2}
                />
              </li>
              <li>
                <img
                  className="icon-right icon-line-height"
                  src="image/lh4.svg"
                  line-height="2.5"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Action*/}
      <div id="ActionControl">
        <div className="widget-action">
          <div className="wg-info">
            <div className="tren">
              <div className="trai">
                <span>{translate('wpanelcontrolsimage_linktitle')}</span>
              </div>
            </div>
            <div className="giua">
              <div className="url-link">
                <div className="thongso">
                  <span className="url">
                    {translate('wpanelcontrolsurl.title')}
                  </span>
                  <span className="value">
                    <input type="text" defaultValue="[HREF]" />
                  </span>
                </div>
              </div>
            </div>
            <div className="duoi">
              <a className="" href="">
                {translate('wpanelcontrolsspecial_link.title')}
              </a>
              <a className="" href="">
                {translate('wpanelcontrolslink_file.title')}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Block option*/}
      <div id="BlockOptionControl">
        <div className="widget-section2 block-option-control control-[ID]">
          <div className="section-option">
            <div className="widget">
              <div className="row">
                <div className="col-md-7 left">
                  <div className="widget-label">[TITLE]</div>
                </div>
                <div className="col-md-5 right">
                  <div className="widget-value right">
                    <div className="toggle">
                      <div className="toggle__status toggle__status--off">
                        {translate('wpanelcontrolsmore_option.title')}
                      </div>
                      <label className="switch check-all-padding">
                        <input type="checkbox" />
                        <span className="slider all-padding" id="" />
                      </label>
                      <label
                        className="switch check-4-padding"
                        style={{ display: 'none' }}
                      >
                        <input type="checkbox" />
                        <span className="slider _4-padding" id="" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr--cs" />
            <div className="widget detail-padding">
              <div className="container">
                <div className="">
                  <div
                    className="d-flex align-items-center"
                    style={{ width: '100%' }}
                  >
                    <div className="all-padding-section">
                      <div className="_1_minus-plus _1_minus-plus-block">
                        <span className="label">
                          {translate('wpanelcontrolsall_side.title')}
                        </span>
                        <div className="minus-plus">
                          <span className="minus">
                            <button className="minus-all" id="">
                              -
                            </button>
                          </span>
                          <input
                            type="text"
                            defaultValue="[PADDING]"
                            id="giatri"
                            className="value-padding"
                          />
                          <span className="plus">
                            <button className="plus-all" id="">
                              +
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="four-padding-section">
                      <div className="left padding" id="padding">
                        <div className="tren mr-3">
                          <span className="label">
                            {translate('wpanelcontrolstop.title')}
                          </span>
                          <div className="minus-plus">
                            <span className="minus">
                              <button className="minus-top" id="">
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              defaultValue="[TOP]"
                              id="value-top"
                              className="value-top"
                            />
                            <span className="plus">
                              <button className="plus-top" id="">
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="tren">
                          <span className="label">
                            {translate('wpanelcontrolsbottom.title')}
                          </span>
                          <div className="minus-plus minus-bottom-right">
                            <span className="minus" style={{}}>
                              <button className="minus-bottom" id="">
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              defaultValue="[BOTTOM]"
                              id="value-bottom"
                              className="value-bottom"
                            />
                            <span className="plus" style={{}}>
                              <button className="plus-bottom" id="">
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="left padding" style={{}} id="padding">
                        <div className="tren mr-3">
                          <span className="label">
                            {translate('wpanelcontrolsleft.title')}
                          </span>
                          <div className="minus-plus">
                            <span className="minus">
                              <button className="minus-left" id="">
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              defaultValue="[LEFT]"
                              id="value-left"
                              className="value-left"
                            />
                            <span className="plus">
                              <button className="plus-left" id="">
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="tren">
                          <span className="label">
                            {translate('wpanelcontrolsright.title')}
                          </span>
                          <div
                            className="minus-plus minus-bottom-right"
                            style={{}}
                          >
                            <span className="minus" style={{}}>
                              <button className="minus-right" id="">
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              defaultValue="[RIGHT]"
                              id="value-right"
                              className="value-right"
                            />
                            <span className="plus" style={{}}>
                              <button className="plus-right" id="">
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right ml-auto">
                      <div className="square" id="square-block">
                        <img
                          title="Padding preview"
                          src="image/square-fc.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="imageControl">
        <div className="control-[ID]">
          <div className="widget image-name">
            <div className="image-selected">
              <img
                id="[image_selected_ID]"
                className="image-select"
                src="https://tinyjpg.com/images/social/website.jpg"
              />
            </div>
            <div className="tren">
              <div className="d-flex align-items-canter justify-content-center">
                {/* <div class="label">{language.translate('wpanelcontrolsimage_name.title')}</div> */}
                <span id="name-image">
                  {translate('wpanelcontrolslogo_name.title')}
                </span>
              </div>
              <div className="button">
                <button
                  className="btn btn-info change"
                  id="[uploadImage-ID]"
                  type="submit"
                >
                  {translate('wpanelcontrolschange_image.title')}
                </button>
                {/* <button class="btn btn-secondary" style="pointer-events: none;">{language.translate('wpanelcontrolseffect.title')}</button> */}
              </div>
            </div>
          </div>
          <div className="widget alternate-text">
            <div className="row">
              <div className="col-md-3 left">
                <div className="widget-label">
                  {translate('wpanelcontrolsalternate.title')}
                </div>
              </div>
              <div className="col-md-9 right">
                <input
                  type="text"
                  defaultValue=""
                  id="[img_alt_ID]"
                  className="name-img"
                />
              </div>
            </div>
          </div>
          <div className="widget range" id="image-control-ID">
            <div className="row">
              <div className="col-md-8 left">
                <div className="widget-label">{translate('imagewidth')}</div>
              </div>
            </div>
            <div className="tren">
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                defaultValue={0}
                className="image-width"
              />
              <div className="thongso image-width-text">
                {translate('wpanelcontrolsvalue.title')}
              </div>
            </div>
          </div>
          <hr className="hr--cs" />
          <div className="widget range" id="image-control-ID">
            <div className="row">
              <div className="col-md-8 left">
                <div className="widget-label">
                  <div className="d-flex align-items-center">
                    <div>{translate('imageheight')}</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 right">
                <div className="d-flex align-items-center">
                  <div className="mr-2 small">
                    {translate('imageauto_height')}
                  </div>
                  <div className="d-flex align-items-center">
                    <label style={{ position: 'relative' }}>
                      <input
                        type="checkbox"
                        className="styled3 image-height-auto"
                      />
                      <span className="check-symbol" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="tren">
              <input
                type="range"
                min={0}
                max={2000}
                step={1}
                defaultValue={0}
                className="image-height"
              />
              <div className="thongso image-height-text">
                {translate('wpanelcontrolsvalue.title')}
              </div>
            </div>
          </div>
          <hr className="hr--cs" />
          <div className="widget align">
            <div className="label">[TITLE]</div>
            <div className="thongso">
              <ul>
                <li>
                  <i
                    className="builder-icon-align-left icon-left-img icon-align"
                    align="left"
                    id="[icon-left-ID]"
                  />
                </li>
                <li>
                  <i
                    className="builder-icon-align-justify icon-center-img icon-align"
                    align="center"
                    id="[icon-center-ID]"
                  />
                </li>
                <li>
                  <i
                    className="builder-icon-align-right icon-right-img icon-align"
                    align="right"
                    id="[icon-right-ID]"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="widget-section link-image">
            <div className="wg-info">
              <div className="tren">
                <div className="trai">
                  <span>{translate('image_url')}</span>
                </div>
              </div>
              <div className="giua">
                <div className="url-link">
                  <div className="thongso">
                    <span className="url">
                      {translate('wpanelcontrolsurl.title')}
                    </span>
                    <span className="value">
                      <input
                        type="text"
                        className="url-image"
                        id="[img_url_ID]"
                        defaultValue=""
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="duoi">
                <a className="copy-url" href="">
                  {translate('wpanelcontrolscopy_url.title')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Button option*/}
      <div id="ButtonOptionControl">
        <div className="widget-section2 button-option-control">
          <div
            className="widget range"
            style={{
              borderBottom: '1px solid #e1e4e7',
              height: 'auto !important',
              paddingBottom: '15px !important',
            }}
          >
            <div className="row">
              <div className="col-md-8 left">
                <div className="widget-label">
                  {translate('wpanelcontrolsauto_width.title')}
                </div>
              </div>
              <div
                className="col-md-4 right"
                style={{ paddingRight: '6px !important' }}
              >
                <div className="widget-value right">
                  <div className="toggle">
                    <label className="switch">
                      <input type="checkbox" defaultChecked="checked" />
                      <span className="slider auto-width-plus" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr
              className="hr--cs hr--cs-button hide"
              style={{ borderTop: '1px solid rgba(0, 0, 0, 0.04) !important' }}
            />
            <div className="tren auto-width-button hide">
              <input
                type="range"
                min={50}
                max={500}
                step={5}
                defaultValue=""
                style={{}}
                id=""
                className="color-default color-default-button"
              />
              <div className="thongso width-button" id="thongsos">
                [WIDTH_BUTTON]
              </div>
            </div>
          </div>
          <div
            className="widget-section bg-color"
            style={{ height: '60px !important' }}
          >
            <div className="label">
              {translate('wpanelcontrolsbackground_color.title')}
            </div>
            <div className="thongso background">
              <span className="click-color">
                <input
                  type="color"
                  className="color background-color"
                  defaultValue="#cccccc"
                  id="[BACKINPUT_ID]"
                />
              </span>
              <span className="value">
                <input
                  className="background-color-input"
                  type="text"
                  defaultValue="[BACKGROUNDVALUE]"
                  id="background-color"
                />
              </span>
            </div>
          </div>
          <div
            className="widget-section text-color"
            style={{ height: '60px !important' }}
          >
            <div className="label">
              {translate('wpanelcontrolstext_color.title')}
            </div>
            <div className="thongso background">
              <span className="click-color">
                <input
                  type="color"
                  className="text-color"
                  defaultValue="#555555"
                  id=""
                />
              </span>
              <span className="value">
                <input
                  className="input-text-color"
                  type="text"
                  defaultValue=""
                  id="text_color_input"
                />
              </span>
            </div>
          </div>
          <div
            className="widget-section align"
            style={{ height: '60px !important' }}
          >
            <div className="label">
              {translate('wpanelcontrolsalign.title')}
            </div>
            <div className="thongso background">
              <div className="item_1-2 right">
                <div
                  mailup-common-alignment-selector=""
                  ng-model="style['text-align']"
                  className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty"
                >
                  <div className="alignment-container">
                    <button
                      type="button"
                      className="align btn btn-default align-left ng-pristine ng-valid ng-not-empty ng-touched"
                      float="left"
                      ng-model="value"
                      uib-btn-radio="'left'"
                      style={{}}
                    ></button>
                    <button
                      type="button"
                      className="align btn btn-default align-center ng-pristine ng-untouched ng-valid ng-not-empty active"
                      float="center"
                      ng-model="value"
                      uib-btn-radio="'center'"
                    ></button>
                    <button
                      type="button"
                      className="align btn btn-default align-right ng-pristine ng-untouched ng-valid ng-not-empty"
                      float="right"
                      ng-model="value"
                      uib-btn-radio="'right'"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="widget-section line-height"
            style={{ height: '60px !important' }}
          >
            <div className="label">
              {translate('wpanelcontrolsline_height.title')}
            </div>
            <div className="thongso">
              <ul>
                <li>
                  <img
                    className="icon-left icon-line-height active"
                    src="image/lh1.svg"
                    line-height={1}
                    style={{ width: '70%', height: '100%', cursor: 'pointer' }}
                  />
                </li>
                <li>
                  <img
                    className="icon-center icon-line-height"
                    src="image/lh2.svg"
                    line-height="1.5"
                    style={{ width: '70%', height: '100%', cursor: 'pointer' }}
                  />
                </li>
                <li>
                  <img
                    className="icon-justify icon-line-height"
                    src="image/lh3.svg"
                    line-height={2}
                    style={{ width: '68%', height: '100%', cursor: 'pointer' }}
                  />
                </li>
                <li>
                  <img
                    className="icon-right icon-line-height"
                    src="image/lh4.svg"
                    line-height="2.5"
                    style={{ width: '68%', height: '100%', cursor: 'pointer' }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="widget-section border-radius"
            style={{ height: '60px !important' }}
          >
            <div className="label">
              {translate('wpanelcontrolsborder_radius.title')}
            </div>
            <div className="thongso">
              <div className="minus-plus border-radius">
                <span className="minus">
                  <button className="minus" id="minus-border">
                    -
                  </button>
                </span>
                <input
                  className="border-button"
                  type="text"
                  defaultValue=""
                  id="border-radius"
                />
                <span className="plus">
                  <button className="plus" id="plus-border">
                    +
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="section-option borders" style={{ marginBottom: 40 }}>
            <div className="widget more-options">
              <div className="row">
                <div className="col-md-7 left">
                  <div className="widget-label">
                    {translate('wpanelcontrolsborder.title')}
                  </div>
                </div>
                <div className="col-md-5 right">
                  <div className="widget-value right">
                    <div className="toggle">
                      <div className="toggle__status toggle__status--off">
                        {translate('wpanelcontrolsmore_option.title')}
                      </div>
                      <label className="switch check-all-border">
                        <input type="checkbox" />
                        <span
                          className="slider padding_border all-border"
                          id=""
                        />
                      </label>
                      <label
                        className="switch check-four-border"
                        style={{ display: 'none' }}
                      >
                        <input type="checkbox" />
                        <span
                          className="slider padding_border four-border"
                          id=""
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget all-sides">
              <div className="container">
                <div className="row">
                  <div
                    className="_1_minus-plus _1_minus-plus-border"
                    style={{}}
                  >
                    <span className="label" style={{}}>
                      {translate('wpanelcontrolsall_side.title')}
                    </span>
                    <div
                      className="btn-group dropdown-custom dropdown-custom--cs dropdown"
                      uib-dropdown=""
                      ng-click="toggleDropdown($event)"
                      ng-show="styleEnabled"
                      style={{}}
                    >
                      <button
                        uib-dropdown-toggle=""
                        is-open="isOpen"
                        type="button"
                        className="btn btn-default dropdown-toggle dropdown-toggle-style"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="ng-binding border-style" />
                        <div className="arrows">
                          <span className="caret up" />
                          <span className="caret down" />
                          <div className="clear-fix" />
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-style"
                        role="menu"
                      >
                        {/* ngRepeat: style in styles */}
                        <li ng-repeat="style in styles" className="ng-scope">
                          <a
                            href="javascript:;"
                            ng-click="changeStyle(style)"
                            id=""
                            data-value="solid"
                            className="ng-binding ng-binding-solid"
                          >
                            {translate('wpanelcontrolssolid.title')}
                          </a>
                        </li>
                        {/* end ngRepeat: style in styles */}
                        <li ng-repeat="style in styles" className="ng-scope">
                          <a
                            href="javascript:;"
                            ng-click="changeStyle(style)"
                            id=""
                            data-value="dotted"
                            className="ng-binding ng-binding-dotted"
                          >
                            {translate('wpanelcontrolsdotted.title')}
                          </a>
                        </li>
                        {/* end ngRepeat: style in styles */}
                        <li ng-repeat="style in styles" className="ng-scope">
                          <a
                            href="javascript:;"
                            ng-click="changeStyle(style)"
                            id=""
                            data-value="dashed"
                            className="ng-binding ng-binding-dashed"
                          >
                            {translate('wpanelcontrolsdashed.title')}
                          </a>
                        </li>
                        {/* end ngRepeat: style in styles */}
                      </ul>
                    </div>
                    <div className="minus-plus minus-plus-border">
                      <span className="minus minus-border">
                        <button className="minus" id="minus-border-width">
                          -
                        </button>
                      </span>
                      <input
                        className="border-width-input"
                        type="text"
                        defaultValue=""
                        id="giatriborder"
                      />
                      <span className="plus plus-border">
                        <button className="plus" id="plus-border-width">
                          +
                        </button>
                      </span>
                    </div>
                    <div className="widget-section-border">
                      <div className="thongso">
                        <span className="click-color">
                          <input
                            type="color"
                            id=""
                            className="border-color"
                            defaultValue="#000000"
                            style={{
                              padding: 3,
                              border: 'none',
                              width: 28,
                              position: 'absolute',
                              cursor: 'pointer',
                            }}
                          />
                        </span>
                        <span className="value">
                          <input
                            className="border_color_input"
                            type="text"
                            defaultValue=""
                            id="border-color"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="left padding-border" id="padding-border">
                    <div
                      className="_1_minus-plus-top _1_minus-plus-border-top"
                      style={{}}
                    >
                      <span
                        className="label"
                        style={{ width: '100% !important' }}
                      >
                        {translate('wpanelcontrolstop.title')}
                      </span>
                      <div
                        className="btn-group dropdown-custom dropdown-custom--cs dropdown"
                        uib-dropdown=""
                        ng-click="toggleDropdown($event)"
                        ng-show="styleEnabled"
                        style={{}}
                      >
                        <button
                          uib-dropdown-toggle=""
                          is-open="isOpen"
                          type="button"
                          className="btn btn-default dropdown-toggle dropdown-toggle-style-top"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="ng-binding border-style-top">
                            {translate('wpanelcontrolssolid.title')}
                          </span>
                          <div className="arrows">
                            <span className="caret up" />
                            <span className="caret down" />
                            <div className="clear-fix" />
                          </div>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-style-top"
                          role="menu"
                        >
                          {/* ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="solid"
                              className="ng-binding ng-binding-solid-top"
                            >
                              {translate('wpanelcontrolssolid.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="dotted"
                              className="ng-binding ng-binding-dotted-top"
                            >
                              {translate('wpanelcontrolsdotted.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-cborder-colorlick="changeStyle(style)"
                              id=""
                              data-value="dashed"
                              className="ng-binding ng-binding-dashed-top"
                            >
                              {translate('wpanelcontrolsdashed.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                        </ul>
                      </div>
                      <div className="minus-plus minus-plus-border">
                        <span className="minus minus-border">
                          <button className="minus" id="minus-border-top">
                            -
                          </button>
                        </span>
                        <input
                          className="border-input border-top-width-input"
                          type="text"
                          defaultValue={0}
                          id="giatribordertop"
                        />
                        <span className="plus plus-border">
                          <button className="plus" id="plus-border-top">
                            +
                          </button>
                        </span>
                      </div>
                      <div className="widget-section-border">
                        <div className="thongso">
                          <span className="click-color">
                            <input
                              type="color"
                              id=""
                              className="border-color-top"
                              defaultValue="#000000"
                              style={{
                                padding: 3,
                                border: 'none',
                                width: 28,
                                position: 'absolute',
                                top: 2,
                                cursor: 'pointer',
                                left: '-57px',
                              }}
                            />
                          </span>
                          <span className="value">
                            <input
                              className="border_top_color_input"
                              type="text"
                              defaultValue=""
                              id="border-top-color"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="_1_minus-plus-right _1_minus-plus-border-right"
                      style={{}}
                    >
                      <span
                        className="label"
                        style={{ width: '100% !important' }}
                      >
                        {translate('wpanelcontrolsright.title')}
                      </span>
                      <div
                        className="btn-group dropdown-custom dropdown-custom--cs dropdown"
                        uib-dropdown=""
                        ng-click="toggleDropdown($event)"
                        ng-show="styleEnabled"
                        style={{}}
                      >
                        <button
                          uib-dropdown-toggle=""
                          is-open="isOpen"
                          type="button"
                          className="btn btn-default dropdown-toggle dropdown-toggle-style-right"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="ng-binding border-style-right">
                            {translate('wpanelcontrolssolid.title')}
                          </span>
                          <div className="arrows">
                            <span className="caret up" />
                            <span className="caret down" />
                            <div className="clear-fix" />
                          </div>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-style-right"
                          role="menu"
                        >
                          {/* ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="solid"
                              className="ng-binding ng-binding-solid-right"
                            >
                              {translate('wpanelcontrolssolid.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="dotted"
                              className="ng-binding ng-binding-dotted-right"
                            >
                              {translate('wpanelcontrolsdotted.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="dashed"
                              className="ng-binding ng-binding-dashed-right"
                            >
                              {translate('wpanelcontrolsdashed.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                        </ul>
                      </div>
                      <div className="minus-plus minus-plus-border">
                        <span className="minus minus-border">
                          <button className="minus" id="minus-border-right">
                            -
                          </button>
                        </span>
                        <input
                          className="border-input border-right-width-input"
                          type="text"
                          defaultValue={0}
                          id="giatriborderright"
                        />
                        <span className="plus plus-border">
                          <button className="plus" id="plus-border-right">
                            +
                          </button>
                        </span>
                      </div>
                      <div className="widget-section-border">
                        <div className="thongso">
                          <span className="click-color">
                            <input
                              type="color"
                              id=""
                              className="border-color-right"
                              defaultValue="#000000"
                              style={{
                                padding: 3,
                                border: 'none',
                                width: 28,
                                position: 'absolute',
                                top: 2,
                                cursor: 'pointer',
                                left: '-57px',
                              }}
                            />
                          </span>
                          <span className="value">
                            <input
                              className="border_right_color_input"
                              type="text"
                              defaultValue=""
                              id="border-right-color"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="_1_minus-plus-bottom _1_minus-plus-border-bottom"
                      style={{}}
                    >
                      <span
                        className="label"
                        style={{ width: '100% !important' }}
                      >
                        {translate('wpanelcontrolsbottom.title')}
                      </span>
                      <div
                        className="btn-group dropdown-custom dropdown-custom--cs dropdown"
                        uib-dropdown=""
                        ng-click="toggleDropdown($event)"
                        ng-show="styleEnabled"
                        style={{}}
                      >
                        <button
                          uib-dropdown-toggle=""
                          is-open="isOpen"
                          type="button"
                          className="btn btn-default dropdown-toggle dropdown-toggle-style-bottom"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="ng-binding border-style-bottom">
                            {translate('wpanelcontrolssolid.title')}
                          </span>
                          <div className="arrows">
                            <span className="caret up" />
                            <span className="caret down" />
                            <div className="clear-fix" />
                          </div>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-style-bottom"
                          role="menu"
                        >
                          {/* ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="solid"
                              className="ng-binding ng-binding-solid-bottom"
                            >
                              {translate('wpanelcontrolssolid.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="dotted"
                              className="ng-binding ng-binding-dotted-bottom"
                            >
                              {translate('wpanelcontrolsdotted.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="dashed"
                              className="ng-binding ng-binding-dashed-bottom"
                            >
                              {translate('wpanelcontrolsdashed.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                        </ul>
                      </div>
                      <div className="minus-plus minus-plus-border">
                        <span className="minus minus-border">
                          <button className="minus" id="minus-border-bottom">
                            -
                          </button>
                        </span>
                        <input
                          className="border-input border-bottom-width-input"
                          type="text"
                          defaultValue={0}
                          id="giatriborderbottom"
                        />
                        <span className="plus plus-border">
                          <button className="plus" id="plus-border-bottom">
                            +
                          </button>
                        </span>
                      </div>
                      <div className="widget-section-border">
                        <div className="thongso">
                          <span className="click-color">
                            <input
                              type="color"
                              id=""
                              className="border-color-bottom"
                              defaultValue="#000000"
                              style={{
                                padding: 3,
                                border: 'none',
                                width: 28,
                                position: 'absolute',
                                top: 2,
                                cursor: 'pointer',
                                left: '-62px',
                              }}
                            />
                          </span>
                          <span className="value">
                            <input
                              className="border_bottom_color_input"
                              type="text"
                              defaultValue=""
                              id="border-bottom-color"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="_1_minus-plus-left _1_minus-plus-border-left"
                      style={{}}
                    >
                      <span
                        className="label"
                        style={{ width: '100% !important' }}
                      >
                        {translate('wpanelcontrolsleft.title')}
                      </span>
                      <div
                        className="btn-group dropdown-custom dropdown-custom--cs dropdown"
                        uib-dropdown=""
                        ng-click="toggleDropdown($event)"
                        ng-show="styleEnabled"
                        style={{}}
                      >
                        <button
                          uib-dropdown-toggle=""
                          is-open="isOpen"
                          type="button"
                          className="btn btn-default dropdown-toggle dropdown-toggle-style-left"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="ng-binding border-style-left">
                            {translate('wpanelcontrolssolid.title')}
                          </span>
                          <div className="arrows">
                            <span className="caret up" />
                            <span className="caret down" />
                            <div className="clear-fix" />
                          </div>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-style-left"
                          role="menu"
                        >
                          {/* ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="solid"
                              className="ng-binding ng-binding-solid-left"
                            >
                              {translate('wpanelcontrolssolid.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="dotted"
                              className="ng-binding ng-binding-dotted-left"
                            >
                              {translate('wpanelcontrolsdotted.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                          <li ng-repeat="style in styles" className="ng-scope">
                            <a
                              href="javascript:;"
                              ng-click="changeStyle(style)"
                              id=""
                              data-value="dashed"
                              className="ng-binding ng-binding-dashed-left"
                            >
                              {translate('wpanelcontrolsdashed.title')}
                            </a>
                          </li>
                          {/* end ngRepeat: style in styles */}
                        </ul>
                      </div>
                      <div className="minus-plus minus-plus-border">
                        <span className="minus minus-border">
                          <button className="minus" id="minus-border-left">
                            -
                          </button>
                        </span>
                        <input
                          className="border-input border-left-width-input"
                          type="text"
                          defaultValue={0}
                          id="giatriborderleft"
                        />
                        <span className="plus plus-border">
                          <button className="plus" id="plus-border-left">
                            +
                          </button>
                        </span>
                      </div>
                      <div className="widget-section-border">
                        <div className="thongso">
                          <span className="click-color">
                            <input
                              type="color"
                              id=""
                              className="border-color-left"
                              defaultValue="#000000"
                              style={{
                                padding: 3,
                                border: 'none',
                                width: 28,
                                position: 'absolute',
                                top: 2,
                                cursor: 'pointer',
                                left: '-57px',
                              }}
                            />
                          </span>
                          <span className="value">
                            <input
                              className="border_left_color_input"
                              type="text"
                              defaultValue=""
                              id="border-left-color"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 right"
                    style={{ top: '12px !important' }}
                  >
                    <div className="square-border" id="square-border">
                      <img title="Padding preview" src="image/square-fc.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Action button*/}
      <div id="ActionButtonControl">
        <div className="widget-action action-button">
          <div className="wg-info">
            <div className="tren" id="link-redirect-page" style={{}}>
              <div className="trai">
                <input
                  type="radio"
                  className="check-link-page"
                  name="redirect-page"
                  style={{ marginRight: 5 }}
                />
                <span>{translate('wpanelcontrolslink_to.title')}</span>
              </div>
              <div className="phai">
                <button type="" value="" className="owp-button" id="" />
                <div className="arrows arrows-button">
                  <span className="caret up" />
                  <span className="caret down" />
                  <div className="clear-fix" />
                </div>
                <ul className="down-menu down-menu-button" id="">
                  {/*li*/}
                </ul>
              </div>
            </div>
            <div className="input-url input-url-hide">
              <div className="giua">
                <div className="url-link">
                  <div className="thongso">
                    <span className="url">
                      {translate('wpanelcontrolsurl.title')}
                    </span>
                    <span className="value">
                      <input
                        type="text"
                        defaultValue=""
                        className="input-external"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="tren" id="action-redirect-page" style="border-top: 1px solid #eee;">
                <div class="trai">
                    <input type="radio" class="check-action-page" name="redirect-page" style="margin-right: 5px;"/>
                    <span>{language.translate('wpanelcontrolsactions.title')}</span>
                </div>
                <div class="phai">
                    <button type="" value="" class="action-button-link" id=""></button>
                    <div class="arrows arrows-button">
                        <span class="caret up"></span>
                        <span class="caret down"></span>
                        <div class="clear-fix"></div>
                    </div>
                    <ul class="down-menu-action-button" id="">
                    </ul>
                </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*Video action*/}
      <div id="VideoOptionControl">
        <div className="widget-action action-video">
          <div className="video-content-container">
            <div className="wg-info">
              <div className="widget-label">[TITLE]</div>
              <div className="item_1 basic-spacer">
                <input
                  type="text"
                  defaultValue=""
                  className="input-url-link-video"
                />
              </div>
              <div className="item_1">
                <p className="widget__label widget__label--cs">
                  {translate('wpanelcontrolswidget_label.title')}
                </p>
              </div>
            </div>
            <hr className="hr--cs" />
            <div className="widget-info bottom">
              <div className="item_2-4">
                <div className="widget__box">
                  <span className="box__label">
                    {translate('wpanelcontrolsplay_icon.title')}
                  </span>
                  <div className="box__action">
                    <div className="dropdown--custom">
                      <button className="type dropdown--toggle">
                        <span>
                          {translate('wpanelcontrolsround_solid.title')}
                        </span>
                        <div className="arrows">
                          <span className="caret up" />
                          <span className="caret down" />
                          <div className="clear-fix" />
                        </div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-type">
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsround_solid.title')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsround_outline')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsrectangle_solid')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsrectangle_outline')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolssquare_solid')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolssquare_outline')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsarrow_only.title')}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="widget__box">
                  <span className="box__label">
                    {translate('wpanelcontrolsplay_icon_color.title')}
                  </span>
                  <div className="box__action">
                    <div className="dropdown--custom">
                      <button className="color dropdown--toggle">
                        <span>{translate('wpanelcontrolslight.title')}</span>
                        <div className="arrows">
                          <span className="caret up" />
                          <span className="caret down" />
                          <div className="clear-fix" />
                        </div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-color">
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolslight.title')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsdark.title')}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="widget__box" style={{ marginBottom: 40 }}>
                  <span className="box__label">
                    {translate('wpanelcontrolsplay_icon_size.title')}
                  </span>
                  <div className="box__action">
                    <div className="dropdown--custom">
                      <button className="size dropdown--toggle">
                        <span>{translate('wpanelcontrolsvalue.title')}</span>
                        <div className="arrows">
                          <span className="caret up" />
                          <span className="caret down" />
                          <div className="clear-fix" />
                        </div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-size">
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsvalue.title')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsvalue_55.title')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsvalue_60.title')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsvalue_65.title')}</a>
                        </li>
                        <li className="item-drop">
                          <a>{translate('wpanelcontrolsvalue_70.title')}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_2-4">
                <div className="video-square">
                  <img title="Play icon preview" src="image/type-01.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*html*/}
      <div id="HtmlOptionControl">
        <div className="widget-section action-html align-items-top control-[ID]">
          <div>
            <div className="widget-section-1 _1khoi">
              <textarea
                className="p-2 html-input"
                style={{ margin: 12, width: 'calc(100% - 24px)', height: 150 }}
                defaultValue={'[HTML]'}
              />
            </div>
            {/* end _1khoi*/}
            <div className="widget-section-2 _1khoi">
              <div className="widget-desc">
                <h3 className="widget-label">
                  {translate('wpanelcontrolsdes_label.title')}
                </h3>
                <p className="widget-label-des">
                  {translate('wpanelcontrolsdes_widget_label.title')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

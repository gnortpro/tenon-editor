import { useEffect } from 'react';
// if (typeof window !== 'undefined') {
//   require('./src/build');
// }
import { Editor } from './src/js/builder';
import jQuery from 'jquery';
import { MainComponent } from './components/main';
import { ControlComponent } from './components/control';
import { WidgetComponent } from './components/widget';
import { OtherComponent } from './components/other';

export interface IEmailEditorProps {}

const EmailEditor: React.FC<IEmailEditorProps> = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      jQuery(document).ready(() => {
        const editor = new Editor({
          root: '/',
          source: '',
          url: 'http://localhost:3000/blank.html',
          urlBack: window.location.origin,
          uploadAssetUrl: 'backend.php?action=asset',
          uploadAssetMethod: 'POST',
          uploadTemplateUrl: 'backend.php?action=upload',
          saveUrl: 'backend.php?action=save',
          saveMethod: 'POST',
          templates: [],
          tags: [],
          changeTemplateCallback: (url: string) => {},
        });

        editor.init();
      });
    }
  }, []);

  return (
    <div>
      <MainComponent />
      <ControlComponent />
      <WidgetComponent />
      <OtherComponent />
    </div>
  );
};

export default EmailEditor;

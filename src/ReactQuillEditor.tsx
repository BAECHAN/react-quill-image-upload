import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ReactQuillEditorProps {
  style?: any;
  value?: string;
  onChange: (value: string) => void;
}

/**
 * @description 툴바설정 - https://quilljs.com/docs/modules/toolbar/
 */
function ReactQuillEditor({ style, value, onChange }: ReactQuillEditorProps) {
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ['clean'], // remove formatting button
      ],
    },
  };
  return (
    <>
      <ReactQuill
        style={style}
        modules={modules}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export default ReactQuillEditor;

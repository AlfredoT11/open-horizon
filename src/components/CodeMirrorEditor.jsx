import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

export default function CodeMirrorEditor({ initialCode, onChange }) {
  const editorRef = useRef();

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = new EditorView({
      state: EditorState.create({
        doc: initialCode,
        extensions: [
          basicSetup, // Configuración básica del editor
          javascript(), // Resaltado de sintaxis para JavaScript
          oneDark,
          EditorView.updateListener.of((update) => {
            if (update.changes && onChange) {
              onChange(editor.state.doc.toString());
            }
          }),
        ],
      }),
      parent: editorRef.current,
    });

    return () => editor.destroy(); // Limpieza cuando el componente se desmonta
  }, [initialCode, onChange]);

  return <div ref={editorRef} style={{ border: '1px solid #ccc', height: '400px' }} />;
}

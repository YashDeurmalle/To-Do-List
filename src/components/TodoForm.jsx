import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { todoAtom } from '../recoil/todoAtom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoForm() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const editor = useRef(null);

  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validationSchema: Yup.object({
      task: Yup.string()
        .min(3, 'Task must be at least 3 characters')
        .required('Task is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newTask = {
        id: Date.now(),
        task: values.task,
        completed: false,
      };
      setTodos([newTask, ...todos]);
      toast.success('Task added!');
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mb-6">
      <JoditEditor
        ref={editor}
        value={formik.values.task}
        tabIndex={1}
        onBlur={(newContent) => formik.setFieldValue('task', newContent)}
        onChange={() => {}}
      />
      {formik.touched.task && formik.errors.task ? (
        <div className="text-red-600 mt-1">{formik.errors.task}</div>
      ) : null}
      <button
        type="submit"
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}

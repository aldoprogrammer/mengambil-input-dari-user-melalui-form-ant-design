import React from 'react';
import './App.css';
import { Form, Input, Select } from 'antd';

function App() {
  const [form] = Form.useForm();
  const name = Form.useWatch("myName", form);
  const expert = Form.useWatch("expert", form);

  return (
    <div className="App">
        <h1>Selamat Datang Kembali {name}</h1>
        <Form form={form}>
          <Form.Item label="Name" name={"myName"}>
            <Input placeholder="Masukkan Nama" />
          </Form.Item>
          <Form.Item label="Expertise" name={"expert"}>
            <Select
            placeholder="Pilih Mobil Yang Kamu Mau?"
            options={[
              {
                label: "Javascript",
                value: "Javascript",
              },
              {
                label: "Lamborghini",
                value: "Lamborghini",
              },
              {
                label: "Buggati",
                value: "Buggati",
              },
              {
                label: "Ferrari",
                value: "Ferrari",
              },
              {
                label: "Lainnya",
                value: "lainnya",
              },
            ]}
            >
            </Select>
          </Form.Item>
          {expert==="lainnya" ? (
            <Form.Item label="Deskripsikan Mobil Impian Mu?" name={"specify"}>
              <Input placeholder='Tulis nama mobil nya!' />
            </Form.Item>
            ) : null}
        </Form>
    </div>
  );
}
export default App;
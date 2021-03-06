import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined, StarOutlined } from "@ant-design/icons";
import { getToken, realUpload } from "@/api";
const { Dragger } = Upload;
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
    };
  }

  httpRequest = (req) => {
    let fileName = req.file.name;
    let form = new FormData();
    // 后端接受参数 ，可以接受多个参数
    form.append("file", req.file);
    realUpload(form)
      .then((res) => {
        console.log(res.status);
        if (res.status == 1) {
          message.success("上传成功");
          this.setState({
            fileName,
          });
          this.props.getUrl(res.data.filename);
        } else {
        }
      })
      .catch((rej) => {
        message.error("上传失败");
      });

    /* // 获取文件后缀
    let filetype = "";
    let fileName = req.file.name;
    let first = fileName.lastIndexOf(".");
    filetype = fileName.substring(0, first) + new Date().getTime();
    console.log(req);

    const keyname = fileName;

    getToken().then((res) => {
      const formdata = new FormData();
      formdata.append("file", req.file);
      formdata.append("token", res.data.key);
      formdata.append("key", filetype);
      if (res.code === "200") {
        upload(formdata).then((resI) => {
          message.success("上传成功");
          this.setState({
            fileName,
          });
          let url = res.data.doman + "/" + resI.key;
          this.props.getUrl(url);
        });
      }
    }); */
  };

  render() {
    const { domain, fileName } = this.state;
    const props = {
      name: "file",
      showUploadList: false,
      action: domain,
      customRequest: this.httpRequest,
    };
    return (
      <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">{!fileName ? "点击或拖拽上传" : ""}</p>
        </Dragger>
        {fileName ? fileName : ""}
      </div>
    );
  }
}

export default Update;

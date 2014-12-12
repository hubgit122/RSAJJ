从github上下载的, 后来自己改动很多, 创建版本库的时候忘了迁移了, 这是原地址:
https://github.com/wwwtyro/cryptico.git

每个文件都改过, 不要和上面的版本的不同文件混合使用. 

实现js的加密和签名, 和我的另一个工程里的MyRSAUtils配合使用:
https://github.com/wwwtyro/cryptico.git

加密解密完全按照PKCS#1 v2.1的标准, 签名体制是自己改造的, 注意密文包含了接受者的模数还有"发送时的毫秒数"连接"发送者向接受者发送消息的计数值模256"的信息, 一定程度上防止了伪造和复用
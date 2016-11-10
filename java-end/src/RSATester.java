import java.security.KeyPair;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Map;

import ssq.utils.RSAUtil;

public class RSATester
{
	public PublicKey	publicKey;
	public PrivateKey	privateKey;
	public String		source	= "Matt, I need you to help me with my Starcraft strategy.";
	
	RSATester()
	{
		try
		{
			KeyPair keyMap = RSAUtil.generateKeyPair();
			publicKey = keyMap.getPublic();
			privateKey = keyMap.getPrivate();
			System.out.println("公钥: \n\r" + publicKey);
			System.out.println("私钥： \n\r" + privateKey);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
	//	byte[] encode() throws Exception
	//	{
	//		byte[] data = source.getBytes();
	//		byte[] encodedData = RSAUtils.encryptByPublicKey(data, publicKey);
	//		System.out.println("加密后文字：\r\n" + Base64Utils.encode(encodedData));
	//		return encodedData;
	//	}
	//	
	//	void test() throws Exception
	//	{
	//		System.out.println("公钥加密——私钥解密");
	//		System.out.println("\r加密前文字：\r\n" + source);
	//		byte[] data = source.getBytes();
	//		byte[] encodedData = RSAUtils.encryptByPublicKey(data, publicKey);
	//		System.out.println("加密后文字：\r\n" + Base64Utils.encode(encodedData));
	//		//        encodedData = "QlInBD3EcTdDv3RQtNH9mI4zSKVbuyO+F//EWNTj8r/5B5gGD8z3MFqH1hq2Azs8/F/n7wakGVClULEUZClqBkhfGI47wQRvH0oEBV4WlO2QdbNnhfKCBW0d8+5rPhAwmI19/rg/dizye8WsOxsVIek/jVlmOnHDqsNCkggsyt0=".getBytes();
	//		byte[] decodedData = RSAUtils.decryptByPrivateKey(encodedData, privateKey);
	//		String target = new String(decodedData);
	//		System.out.println("解密后文字: \r\n" + target);
	//	}
	//	
	//	void testSign() throws Exception
	//	{
	//		System.out.println("私钥加密——公钥解密");
	//		String source = "这是一行测试RSA数字签名的无意义文字";
	//		System.out.println("原文字：\r\n" + source);
	//		byte[] data = source.getBytes();
	//		byte[] encodedData = RSAUtils.encryptByPrivateKey(data, privateKey);
	//		System.out.println("加密后：\r\n" + new String(encodedData));
	//		byte[] decodedData = RSAUtils.decryptByPublicKey(encodedData, publicKey);
	//		String target = new String(decodedData);
	//		System.out.println("解密后: \r\n" + target);
	//		System.out.println("私钥签名——公钥验证签名");
	//		String sign = RSAUtils.sign(encodedData, privateKey);
	//		System.out.println("签名:\r" + sign);
	//		boolean status = RSAUtils.verify(encodedData, publicKey, sign);
	//		System.out.println("验证结果:\r" + status);
	//	}
}

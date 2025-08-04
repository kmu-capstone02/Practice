import SHA256 from 'crypto-js/sha256';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('입력 오류', '이메일과 비밀번호를 모두 입력하세요.');
      return;
    }
    const encryptedPassword = SHA256(password).toString();
    console.log('이메일:', email);
    console.log('암호화된 비밀번호:', encryptedPassword);
    Alert.alert('회원가입 성공!', `${email} 님 환영합니다!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="회원가입" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  input: { height: 48, backgroundColor: 'white', borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 12, marginBottom: 16, borderRadius: 6 },
});

import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('로그인 시도:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="로그인" onPress={handleLogin} />

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>회원가입</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FindId')}>
          <Text style={styles.linkText}>아이디 찾기</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FindPassword')}>
          <Text style={styles.linkText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 24, textAlign: 'center' },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    borderColor: '#ccc',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 14,
  },
  separator: {
    marginHorizontal: 10,
    color: '#999',
  },
});

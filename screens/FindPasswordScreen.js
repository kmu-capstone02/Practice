import { Text, View } from 'react-native';


import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';

const dummyUsers = [
  { id: 'user1', password: 'pass1234' },
  { id: 'jh', password: '123' },
  { id: 'admin', password: 'adminpass' },
];

export default function FindPasswordScreen() {
  const [userId, setUserId] = useState('');
  const [foundPassword, setFoundPassword] = useState(null);
  const [error, setError] = useState('');

  const handleFindPassword = () => {
    const user = dummyUsers.find((user) => user.id === userId);
    if (user) {
      setFoundPassword(user.password);
      setError('');
    } else {
      setFoundPassword(null);
      setError('해당 아이디를 찾을 수 없습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 찾기</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력하세요"
        value={userId}
        onChangeText={setUserId}
      />
      <Button title="비밀번호 찾기" onPress={handleFindPassword} />
      {foundPassword && (
        <Text style={styles.result}>비밀번호는: {foundPassword} 입니다.</Text>
      )}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  error: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

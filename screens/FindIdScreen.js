import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const dummyUsers = [
  { name: 'parkgeonwoo', id: 'park123' },
  { name: 'namegimin', id: 'nam456' },
  { name: 'leegeonwoo', id: 'lee789' },
];

export default function FindIdScreen() {
  const [name, setName] = useState('');
  const [foundId, setFoundId] = useState(null);
  const [error, setError] = useState('');

  const handleFindId = () => {
    const user = dummyUsers.find((user) => user.name === name);
    if (user) {
      setFoundId(user.id);
      setError('');
    } else {
      setFoundId(null);
      setError('입력하신 이름으로 등록된 아이디를 찾을 수 없습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>아이디 찾기</Text>
      <TextInput
        style={styles.input}
        placeholder="이름을 입력하세요"
        value={name}
        onChangeText={setName}
      />
      <Button title="아이디 찾기" onPress={handleFindId} />

      {foundId && <Text style={styles.result}>당신의 아이디는: {foundId}</Text>}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
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


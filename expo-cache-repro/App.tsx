import { cache } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const fetchAnimals = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Dog' },
          { id: 2, name: 'Cat' },
          { id: 3, name: 'Bird' },
        ]);
      }, 1000);
    });
  };

  const getAnimals = cache(async () => {
    const cachedData = getAnimals.data;

    if (cachedData) {
      return cachedData;
    }
    const animals = await fetchAnimals();
    getAnimals.data = animals;

    return animals;
  });

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

import { Text, View, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const MenuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        {/* Icon */}
        {item.icon ? (
          <item.icon />
        ) : (
          <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        )}

        {/* Text */}
        <Text style={styles.optionText}>{item.name}</Text>

        {/* Icon */}
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: 'auto' }}
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  optionText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MenuOption;

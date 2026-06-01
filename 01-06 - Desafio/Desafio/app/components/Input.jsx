import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  label = null,
  error = null,
  icon = null,
  maxLength = null,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={estilos.container}>
      {label && <Text style={estilos.label}>{label}</Text>}
      <View
        style={[
          estilos.inputContainer,
          isFocused && estilos.inputContainerFocused,
          error && estilos.inputContainerError,
        ]}
      >
        {icon && <Text style={estilos.icon}>{icon}</Text>}
        <TextInput
          style={estilos.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#999"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
        />
        {value && (
          <Text style={estilos.checkmark}>
            {error ? '❌' : '✓'}
          </Text>
        )}
      </View>
      {error && <Text style={estilos.errorText}>{error}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    backgroundColor: '#1A1A2E',
    paddingHorizontal: 12,
  },
  inputContainerFocused: {
    borderColor: '#8B5FBF',
    shadowColor: '#8B5FBF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainerError: {
    borderColor: '#FF6B9D',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#FFF',
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
  },
  checkmark: {
    fontSize: 16,
    marginLeft: 8,
  },
  errorText: {
    color: '#FF6B9D',
    fontSize: 12,
    marginTop: 4,
  },
});

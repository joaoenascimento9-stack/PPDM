import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon = null,
}) {
  return (
    <TouchableOpacity
      style={[
        estilos.button,
        estilos[variant],
        estilos[size],
        disabled && estilos.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && <Text style={estilos.icon}>{icon}</Text>}
      <Text style={[estilos.text, estilos[`text_${variant}`]]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  primary: {
    backgroundColor: '#FF69B4',
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  secondary: {
    borderWidth: 2,
    borderColor: '#8B5FBF',
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  text_primary: {
    color: '#FFF',
  },
  text_secondary: {
    color: '#8B5FBF',
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    fontSize: 18,
  },
});

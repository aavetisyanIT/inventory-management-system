class Tokenizer:
    def encode(input_str: str):
        return 123

    def decode(encoded_num: int):
        return "decoded string"


original_text = "Hello Hello worldworldworldworldworldworld"
raw_bytes_list = list(original_text.encode("utf-8"))

# print([ord(x) for x in my_string])
# print(list(my_string.encode("utf-8")))


def find_common_pair(bytes_list: list[int]) -> tuple[int, int]:
    byte_map = {}
    for index, byte_num in enumerate(bytes_list[:-1]):
        if (byte_num, bytes_list[index + 1]) not in byte_map:
            byte_map[(byte_num, bytes_list[index + 1])] = 1
        else:
            byte_map[(byte_num, bytes_list[index + 1])] = (
                byte_map[(byte_num, bytes_list[index + 1])] + 1
            )
    first_element = next(iter(byte_map.items()))
    most_common_pair = first_element[0]
    times_repeated = first_element[1]
    max_value = 0
    for pair, value in byte_map.items():
        if value >= max_value:
            most_common_pair = pair

    print(most_common_pair)
    return most_common_pair


result = find_common_pair(raw_bytes_list)
print(result)

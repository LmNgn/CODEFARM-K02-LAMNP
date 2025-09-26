export const getTitle = (score) => {
  if (score < 3) return { label: "Yếu", color: "text-red-500" };
  if (score < 6) return { label: "Trung bình", color: "text-orange-500" };
  if (score <= 8) return { label: "Khá", color: "text-blue-500" };
  if (score < 9.5) return { label: "Giỏi", color: "text-green-500" };
  if (score <= 10) return { label: "Xuất sắc", color: "text-purple-500" };
  return { label: "Không hợp lệ", color: "text-gray-500" };
};

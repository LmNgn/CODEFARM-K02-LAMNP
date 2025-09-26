const Legend = () => {
  const legendItems = [
    { label: "Xuất sắc", color: "text-green-600", range: "8.5 - 10.0" },
    { label: "Giỏi", color: "text-blue-600", range: "7.0 - 8.4" },
    { label: "Khá", color: "text-yellow-600", range: "5.5 - 6.9" },
    { label: "Trung bình", color: "text-orange-600", range: "4.0 - 5.4" },
    { label: "Yếu", color: "text-red-600", range: "< 4.0" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-900">
        Thang điểm đánh giá
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {legendItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded border"
          >
            <span className={`font-semibold ${item.color}`}>{item.label}</span>
            <span className="text-gray-600 text-sm">{item.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;

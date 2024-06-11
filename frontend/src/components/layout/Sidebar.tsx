export const Sidebar = () => {
  return (
    <aside className="w-[250px] min-w-[250px] relative bg-[#8ba1b7]">
      <div className="relative">
        <div className="relative h-full overflow-x-hidden overflow-y-auto bg-[#0b2948]">
          <div className="flex flex-col h-full">
            <div className="h-16 min-h-16 flex items-center py-5 mb-6 mt-4">
              <div className="flex items-center w-full overflow-hidden">
                <div className="size-[35px] flex items-center justify-center text-white font-bold text-[24px] ml-1 mr-[10px] bg-gradient-to-t from-[#1557cd] to-[#5ae1ff]">
                  P
                </div>
                <p className="m-0 overflow-hidden line-clamp-1 text-[20px] text-[#0098e5] font-bold">
                  Pro Sidebar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

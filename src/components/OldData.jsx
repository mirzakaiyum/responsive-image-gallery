export default function OldData() {
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="grid grid-cols-5 gap-4 grid-flow-row-dense">
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 0 ? "col-span-2 row-span-2" : "col-span-1"
              }`}
            >
              <ImageCard
                images={[item.image]}
                ref={setNodeRef}
                style={style}
                {...items}
                {...attributes}
                {...listeners}
              />
            </div>
          ))}
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? <ImageCard images={items.image} /> : null}
        </DragOverlay>

        <div className="flex flex-col gap-2 items-center place-content-center border-2 border-dashed rounded-md bg-gray-50 hover:bg-blue-50 hover:border-blue-400 cursor-pointer">
          <PhotoIcon className="h-6 w-6" />
          <div>Add Images</div>
        </div>
      </div>
    </DndContext>
  );
}

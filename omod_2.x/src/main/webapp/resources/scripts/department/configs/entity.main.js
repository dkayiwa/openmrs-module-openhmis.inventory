/* initialize and bootstrap application */
requirejs(['department/configs/entity.module'], function() {
    angular.bootstrap(document, ['entitiesApp']);
});

emr.loadMessages([
    "openhmis.inventory.general.new",
    "openhmis.inventory.general.error.notFound",
    "openhmis.inventory.general.created.success",
    "openhmis.inventory.general.updated.success",
    "openhmis.inventory.general.retired.success",
    "openhmis.inventory.general.unretired.success",
    "openhmis.inventory.general.confirm.delete",
    "openhmis.inventory.general.deleted.success",
    "openhmis.inventory.general.name.required",
    "openhmis.inventory.general.retireReason.required",
    "openhmis.inventory.general.unretire",
    "openhmis.inventory.general.retire",
    "openhmis.inventory.general.delete",
    "openhmis.inventory.general.retired.reason",
    "general.edit",
    "general.new",
    "general.name",
    "general.description",
    "general.cancel",
    "general.save",
    "general.retireReason",
    "general.purge",
    "openhmis.inventory.general.error.entityName",
    "openhmis.inventory.general.error.restName",
    "openhmis.inventory.general.error.uuid",
    "openhmis.inventory.general.error.retired",
    "openhmis.inventory.general.error.retireReason",
    "openhmis.inventory.department.name",
    "openhmis.inventory.department.namePlural",
    "openhmis.inventory.general.add",
    "openhmis.inventory.general.edit"
]);